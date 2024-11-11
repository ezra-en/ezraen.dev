// import React from 'react';
import { Card } from "@/components/ui/card";
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

const BentoGrid = ({ items }: {items: { featured: any; icon: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; features: any[]; }}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
      {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
{items.map((item: { featured: any; icon: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; features: any[]; }, index: Key | null | undefined) => (
        <Card 
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index} 
          className={`
            ${item.featured ? 'md:col-span-2 md:row-span-2' : ''}
            p-6
          `}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{item.icon}</span>
            <h3 className="font-medium">{item.title}</h3>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            {item.description}
          </p>
          
          {item.features && (
            <ul className="text-sm text-muted-foreground space-y-2">
              {item.features.map((feature: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, fIndex: Key | null | undefined) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<li key={fIndex}>• {feature}</li>
              ))}
            </ul>
          )}
        </Card>
      ))}
    </div>
  );
};

export default BentoGrid;