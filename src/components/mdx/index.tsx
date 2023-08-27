'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { Code, Pre } from './code';
import { Components, nativeComponents } from './native';
import { MdxTabs, MdxTabsOption } from './tabs';

const components: Components = {
  ...nativeComponents,
  code: Code,
  pre: Pre,
  Tabs: MdxTabs,
  TabsOption: MdxTabsOption,
};

export function Mdx(p: { children: string }) {
  const Component = useMDXComponent(p.children, components);
  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
