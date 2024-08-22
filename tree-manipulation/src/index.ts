interface Item {
    id: number;
    parent_id?: number;
    sales_amount: number;
}

function sumDirectChildrenSubtreesArray(items: Item[], targetId: number): Record<number, number> | null {
    const children: Record<number, number[]> = {};
    const itemDict: Record<number, Item> = {};

    // Pre-process: create dictionaries for children and items
    items.forEach(item => {
        itemDict[item.id] = item;
        if (item.parent_id !== undefined) {
            if (!children[item.parent_id]) {
                children[item.parent_id] = [];
            }
            children[item.parent_id].push(item.id);
        }
    });

    function sumSubtree(id: number): number {
        const item = itemDict[id];
        const childrenSum = (children[id] || []).reduce((sum, childId) => sum + sumSubtree(childId), 0);
        return item.sales_amount + childrenSum;
    }


    console.log(children[targetId], targetId, 'apa')
    if (!children[targetId]) {
        return null;
    }

    return children[targetId].reduce((result, childId) => {
        result[childId] = sumSubtree(childId);
        return result;
    }, {} as Record<number, number>);
}

// Usage
const items: Item[] = [
    { id: 1, sales_amount: 100 },
    { id: 2, parent_id: 1, sales_amount: 50 },
    { id: 3, parent_id: 1, sales_amount: 30 },
    { id: 4, parent_id: 2, sales_amount: 20 },
    { id: 5, parent_id: 2, sales_amount: 10 },
    { id: 6, parent_id: 3, sales_amount: 15 },
];

const result = sumDirectChildrenSubtreesArray(items, 1);
console.log(result);  // Output: { '2': 80, '3': 45 }