// Given the root of a binary tree, return the inorder traversal of its nodes' values.

function inorderTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const nodesToTraverse = [];

  let currentNode = root;

  while (nodesToTraverse.length || currentNode) {
    while (currentNode) {
      nodesToTraverse.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = nodesToTraverse.pop();
    result.push(currentNode.val);
    currentNode = currentNode.right;
  }

  return result;
}
