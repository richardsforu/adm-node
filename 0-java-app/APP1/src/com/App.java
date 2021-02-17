package com;

import java.util.Scanner;

public class App {

	public static void computation() {
		System.out.println("---- Perfoming Computaion work");
		
	}

	public static  void io() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Name: ");
		String name = sc.nextLine();
		System.out.println("hello " + name);
	}

	public static void main(String[] args) {
	
		
		
		Thread t1=new Thread(()->{
			// task1: io
			io();
		},"IO-Thread");
		
		Thread t2=new Thread(()->{
			// task2: computation work
			computation();
		},"BL-Thread");
		
		
		t1.start();
		t2.start();
		
		
		
	   // io();
		//computation();

	}

}
