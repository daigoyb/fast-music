"use client"

import loadable from "@loadable/component"
import { IconBaseProps, IconType } from "react-icons/lib"

interface typesPropsIcon {
  nameIcon: string;
  provider: string;
  propsIcon?: IconBaseProps
}

export function DynamicIcon({ nameIcon, provider, propsIcon }: typesPropsIcon): JSX.Element {
  const providerFix = (provider: string) => {
    const pv = provider.toLocaleLowerCase();
    if(pv === 'mdi') return 'md'
    return pv
  }
  const lib = providerFix(provider);
  // @ts-expect-error
  const ElementIcon: IconType = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (el: JSX.Element) => el[nameIcon as keyof JSX.Element]
  });

  return <ElementIcon {...propsIcon} />
}