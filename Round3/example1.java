package my_proj.Round3;

public class example1 {
    public static void main(String[] args) {
        String[] arr = { "110", "111", "000" };
        int ans = getMaximumGrayness(arr);

        System.out.println(ans);

    }

    public static int getMaximumGrayness(String[] arr) {
        int temp = 0;
        int[] row = new int[arr.length];
        int[] col = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            temp = 0;
            for (int j = 0; j < arr[i].length(); j++) {
                if (arr[i].charAt(j) == '1') {
                    temp++;
                }
            }
            row[i] = temp;
        }

        for (int i = 0; i < arr.length; i++) {
            temp = 0;
            for (int j = 0; j < arr[i].length(); j++) {
                if (arr[j].charAt(i) == '1') {
                    temp++;
                }
            }
            col[i] = temp;
        }

        int[][] gray = new int[arr.length][arr[0].length()];

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length(); j++) {
                gray[i][j] = (row[i] + col[i] - ((arr.length - row[i] + (arr[0].length() - col[i]))));
            }
        }

        int maxG = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length(); j++) {
                if (gray[i][j] > maxG) {
                    maxG = gray[i][j];
                }
            }
        }

        return maxG;
    }
}
