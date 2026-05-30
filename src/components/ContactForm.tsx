"use client";
import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import EditableText from './EditableText';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  messagePlaceholder?: string;
  buttonText?: string;
  theme?: string;
  tenantId?: string;
  isEditable?: boolean;
  onPropChange?: (path: string, val: any) => void;
}

export default function ContactForm({
  title = "Get in Touch",
  subtitle = "Have a question or want to work together? Fill out the form below.",
  namePlaceholder = "Your full name",
  emailPlaceholder = "Your email address",
  phonePlaceholder = "Your phone number (optional)",
  messagePlaceholder = "How can we help you?",
  buttonText = "Send Message",
  theme = "light",
  tenantId,
  isEditable = false,
  onPropChange
}: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const getThemeStyles = (themeName: string) => {
    switch (themeName) {
      case 'dark':
        return {
          bg: 'bg-[#1A1A1A]',
          text: 'text-white',
          subtitle: 'text-white/60',
          inputBg: 'bg-white/5',
          inputBorder: 'border-white/20 focus:border-white focus:ring-white/10 focus:bg-white/10',
          inputText: 'text-white placeholder-white/30',
          label: 'text-white/80',
          buttonBg: 'bg-white text-black hover:bg-white/90 shadow-[6px_6px_0px_rgba(255,255,255,0.15)]',
          successBg: 'bg-[#262626]',
          successText: 'text-white',
          border: 'border-white/20'
        };
      case 'sand':
        return {
          bg: 'bg-[#F4F1EA]',
          text: 'text-[#2C2C2C]',
          subtitle: 'text-[#2C2C2C]/65',
          inputBg: 'bg-white',
          inputBorder: 'border-[#2C2C2C]/25 focus:border-[#8B5E3C] focus:ring-[#8B5E3C]/10',
          inputText: 'text-[#2C2C2C] placeholder-[#2C2C2C]/40',
          label: 'text-[#2C2C2C]/80',
          buttonBg: 'bg-[#8B5E3C] text-white hover:bg-[#A67B5B] shadow-[6px_6px_0px_rgba(44,44,44,0.15)]',
          successBg: 'bg-[#EAE5D8]',
          successText: 'text-[#2C2C2C]',
          border: 'border-[#2C2C2C]/20'
        };
      case 'emerald':
        return {
          bg: 'bg-[#4C6B36]',
          text: 'text-white',
          subtitle: 'text-white/70',
          inputBg: 'bg-white/10',
          inputBorder: 'border-white/20 focus:border-white focus:ring-white/10 focus:bg-white/20',
          inputText: 'text-white placeholder-white/40',
          label: 'text-white/85',
          buttonBg: 'bg-white text-[#4C6B36] hover:bg-white/90 shadow-[6px_6px_0px_rgba(255,255,255,0.15)]',
          successBg: 'bg-[#3D562B]',
          successText: 'text-white',
          border: 'border-white/20'
        };
      case 'light':
      default:
        return {
          bg: 'bg-[#F8F5F2]',
          text: 'text-black',
          subtitle: 'text-black/55',
          inputBg: 'bg-white',
          inputBorder: 'border-black focus:ring-black/10',
          inputText: 'text-black placeholder-black/40',
          label: 'text-black/85',
          buttonBg: 'bg-black text-white hover:bg-black/80 shadow-[6px_6px_0px_rgba(0,0,0,0.2)]',
          successBg: 'bg-white',
          successText: 'text-black',
          border: 'border-black'
        };
    }
  };

  const s = getThemeStyles(theme);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditable) return; // Disable submission inside the editor canvas

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill out all required fields.");
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenantId,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim()
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit message.');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err: any) {
      console.error('[ContactForm Submit Error]', err);
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className={`py-20 px-6 @lg:px-12 ${s.bg} border-b-[4px] ${s.border} flex items-center justify-center transition-all duration-500`}>
        <div className={`max-w-2xl w-full text-center p-10 md:p-16 rounded-3xl ${s.successBg} border-[3px] ${s.border} shadow-[8px_8px_0px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-6 animate-fade-in`}>
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 scale-0 animate-scale-up">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className={`text-3xl font-black uppercase tracking-tighter ${s.successText}`}>Message Sent!</h2>
          <p className={`text-base font-medium leading-relaxed max-w-md ${s.subtitle}`}>
            Thank you for reaching out. Your message has been received, and we'll get back to you as soon as possible!
          </p>
          <button
            onClick={() => setStatus('idle')}
            className={`mt-4 px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all hover:-translate-y-0.5 active:translate-y-0 ${s.buttonBg}`}
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 @lg:py-24 ${s.bg} border-b-[4px] ${s.border} px-6 @lg:px-12 transition-all duration-350`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl @lg:text-5xl font-black uppercase tracking-tighter mb-4 ${s.text}`}>
            <EditableText
              value={title}
              onChange={(val) => onPropChange?.('title', val)}
              isEditable={!!isEditable}
              placeholder="Contact Us"
            />
          </h2>
          <p className={`text-sm @lg:text-base font-bold uppercase tracking-wider max-w-xl mx-auto ${s.subtitle}`}>
            <EditableText
              value={subtitle}
              onChange={(val) => onPropChange?.('subtitle', val)}
              isEditable={!!isEditable}
              placeholder="Get in touch with our team"
              multiline={true}
            />
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl p-4 flex items-center gap-3 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className={`text-[10px] font-black uppercase tracking-widest ${s.label}`}>Name *</label>
              <input
                type="text"
                required
                disabled={status === 'loading'}
                placeholder={namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-5 py-4 border-[2px] rounded-xl text-sm outline-none font-medium transition-all ${s.inputBg} ${s.inputBorder} ${s.inputText}`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={`text-[10px] font-black uppercase tracking-widest ${s.label}`}>Email *</label>
              <input
                type="email"
                required
                disabled={status === 'loading'}
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-5 py-4 border-[2px] rounded-xl text-sm outline-none font-medium transition-all ${s.inputBg} ${s.inputBorder} ${s.inputText}`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className={`text-[10px] font-black uppercase tracking-widest ${s.label}`}>Phone Number</label>
            <input
              type="tel"
              disabled={status === 'loading'}
              placeholder={phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full px-5 py-4 border-[2px] rounded-xl text-sm outline-none font-medium transition-all ${s.inputBg} ${s.inputBorder} ${s.inputText}`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className={`text-[10px] font-black uppercase tracking-widest ${s.label}`}>Message *</label>
            <textarea
              required
              rows={5}
              disabled={status === 'loading'}
              placeholder={messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full px-5 py-4 border-[2px] rounded-xl text-sm outline-none font-medium transition-all resize-none ${s.inputBg} ${s.inputBorder} ${s.inputText}`}
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={status === 'loading' || isEditable}
              className={`px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2 mx-auto disabled:opacity-50 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md ${s.buttonBg} ${isEditable ? 'cursor-not-allowed' : ''}`}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {buttonText}
                </>
              )}
            </button>
            {isEditable && (
              <p className="text-[10px] text-gray-400 mt-2 font-medium">⚡ Submissions are disabled in the editor preview canvas.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
