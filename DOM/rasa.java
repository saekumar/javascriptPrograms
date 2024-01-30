package DOM;

import java.util.Scanner;

public class rasa {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int p=3,q=4;
        int n=p*q,pi=(p-1)*(q-1);
        int e= 7;
        int d;
        d=7;
        int M = sc.nextInt();
        int E = (int) (Math.pow(M,e)%n);
        int D = (int) (Math.pow(E,d)%n);
        System.out.println("Encryption is "+E+" \n"+"Decryption is "+D);



    }
    
}
