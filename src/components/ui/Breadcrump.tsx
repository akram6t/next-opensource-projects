import { ChevronRight } from "lucide-react"
import React from "react"

type BreadcrumpItemType = {
    name: string
    href?: string
}

interface BreadCrumpProps {
    items: BreadcrumpItemType[]
}

export const BreadCrump: React.FC<BreadCrumpProps> = ({ items }) => {
    return (
        <div className="flex space-x-2 items-center">
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-1">
                    {item.href ? (
                        <a href={item.href} className="text-sm text-primary hover:underline">
                            {item.name}
                        </a>
                    ) : (
                        <span className="text-foreground text-sm">{item.name}</span>
                    )}
                    {index < items.length - 1 && (
                        <span className="text-foreground">
                            <ChevronRight size={16}/>
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}