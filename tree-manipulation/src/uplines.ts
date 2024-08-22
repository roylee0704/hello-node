interface TreeNode {
    id: string;
    parentId: string | null;
    path: string | null;
    value: string;
    forLeafId: string;
  }

  class TreeStructure {
    private nodes: TreeNode[];

    constructor(nodes: TreeNode[]) {
      this.nodes = nodes;
    }

    findUplines(targetNodeId: string): TreeNode[] {
      const targetNode = this.nodes.find(node => node.id === targetNodeId);
      if (!targetNode) {
        throw new Error(`Node with id ${targetNodeId} not found`);
      }

      const leafId = targetNode.forLeafId;
      const targetPath = targetNode.path;

      if (!targetPath) {
        return []; // Root node or invalid path
      }


      console.log(targetPath, 'targetPath')
      const pathIds = targetPath.split('|').slice(0,-1)

      return this.nodes
        .filter(node =>
          node.forLeafId === leafId &&
          pathIds.includes(node.id)
        )
        .sort((a, b) => (a.path?.length || 0) - (b.path?.length || 0));
    }
  }

  // Example usage
  const treeData: TreeNode[] = [
    { id: 'A', parentId: null, path: null, value: 'Root', forLeafId: 'A' },
    { id: 'A', parentId: null, path: null, value: 'Root', forLeafId: 'D' },

    { id: 'B', parentId: 'A', path: 'A|B', value: 'Child1', forLeafId: 'D' },
    { id: 'C', parentId: 'B', path: 'A|B|C', value: 'Child2', forLeafId: 'D' },
    { id: 'D', parentId: 'C', path: 'A|B|C|D', value: 'Leaf', forLeafId: 'D' },
  ];

  const tree = new TreeStructure(treeData);

  function findUplines(nodeId: string): TreeNode[] {
    try {
      return tree.findUplines(nodeId);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  // Test the function
  console.log(findUplines('B'));