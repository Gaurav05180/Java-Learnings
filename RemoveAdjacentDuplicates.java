import java.util.Scanner;
import java.util.Stack;

public class RemoveAdjacentDuplicates{

    public static int getScore(String str){
        int score = 0;
        Stack<Character> stack = new Stack<>();
        for(char c : str.toCharArray()){
            if(!stack.isEmpty() && stack.peek()==c){
                stack.pop();
                score++;
            }
            else stack.push(c);
        }

        return score;
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of test cases: ");
        int n = sc.nextInt();
        sc.nextLine();

        while(n-- > 0){
            System.out.print("Enter a String: ");
            String s = sc.nextLine();
            System.out.println("Score is: " + getScore(s));
        }

        sc.close();
    }
}