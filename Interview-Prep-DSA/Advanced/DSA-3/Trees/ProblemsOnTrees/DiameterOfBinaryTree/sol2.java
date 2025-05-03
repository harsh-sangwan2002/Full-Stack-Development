package DiameterOfBinaryTree;

public class sol2 {

    private class Pair {

        int ht;
        int dia;

        Pair(int ht, int dia) {
            this.ht = ht;
            this.dia = dia;
        }
    }

    private Pair helper(TreeNode node) {

        if (node == null)
            return new Pair(0, 0);

        Pair lp = helper(node.left);
        Pair rp = helper(node.right);

        int ht = Math.max(lp.ht, rp.ht) + 1;
        int dia = lp.ht + rp.ht;
        dia = Math.max(dia, Math.max(lp.dia, rp.dia));

        Pair mp = new Pair(ht, dia);
        return mp;
    }

    public int solve(TreeNode A) {

        return helper(A).dia;
    }
}
