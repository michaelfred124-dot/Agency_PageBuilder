/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  title: string;
  description: string;
  icon: string;
  color?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}
