import React from 'react';
import Stripe from 'stripe';
import { 
  DollarSign, 
  TrendingUp, 
  CreditCard, 
  Activity, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminRevenuePage() {
  const isStripeConnected = !!process.env.STRIPE_SECRET_KEY;
  
  let balance = { available: 0, pending: 0 };
  let mrr = 0;
  let recentCharges: Stripe.Charge[] = [];
  let errorMsg = null;

  if (isStripeConnected) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2026-05-27.dahlia' as any });
      
      // Fetch Balance
      const balanceData = await stripe.balance.retrieve();
      balance.available = balanceData.available.reduce((acc, curr) => acc + curr.amount, 0) / 100;
      balance.pending = balanceData.pending.reduce((acc, curr) => acc + curr.amount, 0) / 100;

      // Fetch MRR
      const subscriptions = await stripe.subscriptions.list({ status: 'active', limit: 100 });
      let stripeMRR = 0;
      for (const sub of subscriptions.data) {
        const price = sub.items.data[0]?.price;
        if (price && price.unit_amount) {
          let amount = price.unit_amount / 100;
          if (price.recurring?.interval === 'year') {
            amount = amount / 12;
          }
          stripeMRR += amount * sub.quantity;
        }
      }
      mrr = Math.round(stripeMRR);

      // Fetch Recent Charges
      const chargesData = await stripe.charges.list({ limit: 10 });
      recentCharges = chargesData.data;

    } catch (error: any) {
      console.error("Stripe fetch error:", error);
      errorMsg = error.message;
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Finance & Revenue</h1>
          <p className="text-slate-500">Live financial overview synced directly from your Stripe account.</p>
        </div>
        {isStripeConnected && (
          <a 
            href="https://dashboard.stripe.com" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100 transition-colors"
          >
            Open Stripe Dashboard <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {!isStripeConnected ? (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center max-w-2xl mx-auto mt-12">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Stripe Not Connected</h2>
          <p className="text-slate-600 mb-6">
            To view live revenue data, you need to add your Stripe Secret Key to your environment variables.
          </p>
          <div className="bg-slate-900 text-left p-4 rounded-xl overflow-x-auto text-sm text-slate-300 font-mono">
            STRIPE_SECRET_KEY="sk_test_..."
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Add this to your `.env.local` file and refresh the page.
          </p>
        </div>
      ) : errorMsg ? (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-red-700">
          <h3 className="font-bold flex items-center gap-2"><AlertCircle className="w-5 h-5" /> Error fetching Stripe data</h3>
          <p className="mt-1">{errorMsg}</p>
        </div>
      ) : (
        <>
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-slate-500 font-medium">Available Balance</h3>
              </div>
              <div className="text-4xl font-extrabold text-slate-900">${balance.available.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <p className="text-sm text-emerald-600 mt-2 flex items-center gap-1 font-medium">
                <CheckCircleIcon className="w-4 h-4" /> Ready for payout
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-slate-500 font-medium">Pending Balance</h3>
              </div>
              <div className="text-4xl font-extrabold text-slate-900">${balance.pending.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <p className="text-sm text-amber-600 mt-2 font-medium">
                Processing payments
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-slate-500 font-medium">Monthly Recurring (MRR)</h3>
              </div>
              <div className="text-4xl font-extrabold text-slate-900">${mrr.toLocaleString()}</div>
              <p className="text-sm text-indigo-600 mt-2 font-medium">
                From active subscriptions
              </p>
            </div>
          </div>

          {/* Recent Transactions Table */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-8">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-slate-400" />
                Recent Transactions
              </h3>
            </div>
            
            {recentCharges.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                No recent transactions found.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recentCharges.map((charge) => (
                      <tr key={charge.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-bold text-slate-900">
                            ${(charge.amount / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {charge.status === 'succeeded' ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                              Paid
                            </span>
                          ) : charge.status === 'pending' ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              Pending
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Failed
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {charge.billing_details?.email || charge.receipt_email || 'Guest'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {new Date(charge.created * 1000).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {charge.receipt_url ? (
                            <a href={charge.receipt_url} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-900 font-medium">
                              View Receipt
                            </a>
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function CheckCircleIcon(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
