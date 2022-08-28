package my_proj.Round3;

import java.util.*;

public class example2 {
    public static void main(String[] args) {
        int[] arr = { -5, 1, 3, 2, 6, 7, 4 };
        System.out.println(firstMissingPositive(arr));

    }

    public static int firstMissingPositive(int[] arr) {
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            list.add(arr[i]);
        }

        int j = 1;
        while (!list.isEmpty()) {
            if (!list.contains(j)) {
                return j;
            }
            j++;
        }
        return -1;

    }
}
