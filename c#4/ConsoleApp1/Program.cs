using System;
using System.Security.Cryptography.X509Certificates;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Task1();
            // Task2();
            // Task3();
            // Task4();
            // Task5();
            // Task6();
            // Task7();
            Console.WriteLine("Hello World!");
        }
        static void Task1()
        {
            int n = 4;
            var mas = new int[n];

            for(int i = 0; i < n; i++)
            {
                Console.Write("Whrite number: ");
                int number = int.Parse(Console.ReadLine());
                
                mas[i] = number;
            }

            Console.WriteLine("number of masive ");
            
            for(int i = 0; i < n; i++)
            {
               Console.WriteLine(mas[i]); 
            }
             

        }
        static void Task2()
        {
            int n = 4;
            var mas = new int[n];

            for(int i = 0; i < n; i++)
            {
                Console.Write("Whrite number: ");
                int number = int.Parse(Console.ReadLine());
                
                mas[i] = number;
            }

            Console.WriteLine("number of masive ");
            
            for(int i = n - 1; i >= 0; i--)
            {
               Console.WriteLine(mas[i]); 
            }
        }
        static void Task3()
        {
          int n = 4;
          int sum = 0;
            var mas = new int[n];

            for(int i = 0; i < n; i++)
            {
                Console.WriteLine("Whrite number: ");
                int number = int.Parse(Console.ReadLine());
                
                mas[i] = number;
            }

            Console.WriteLine(" ");
            
            for(int i = 0; i < n; i++)
            {
               sum += mas[i];
            } 
            Console.WriteLine(sum); 
        }
        static void Task4()
        {
           int x = 3;
           int y = 3;
            var mas = new int[x, y];

            for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
                Console.WriteLine("Whrite number: ");
                int number = int.Parse(Console.ReadLine());
                
                mas[i, j] = number;
                }
            }

            Console.WriteLine("number of masive ");
            
            for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
                    Console.Write(mas[i,j]);
                }
                Console.WriteLine(" ");

            }
        }
        static void Task5()
        {
            int x = 3;
            int y = 3;

            var mas = new int[x, y];
            var mas2 = new int[x, y];
            var mas3 = new int[x, y];

            for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
                Console.WriteLine("Whrite number: ");
                int number = int.Parse(Console.ReadLine());
                
                mas[i, j] = number;
                }
            }

            for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
                Console.WriteLine("Whrite number: ");
                int number = int.Parse(Console.ReadLine());
                
                mas2[i, j] = number;
                }
            }
            for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
            
                
                mas3[i, j] = mas[i, j] + mas2[i, j];
                }
            }

            Console.WriteLine("number of masive ");
            
            for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
                    Console.Write(mas3[i,j]);
                }
                Console.WriteLine(" ");

            }
            
        }
        static void Task6()
        {
           int x = 3;
            int y = 3;

            var mas = new int[x, y];
            var mas2 = new int[x, y];
            var mas3 = new int[x, y];

            for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
                Console.WriteLine("Whrite number: ");
                int number = int.Parse(Console.ReadLine());
                
                mas[i, j] = number;
                }
            }

            for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
                Console.WriteLine("Whrite number: ");
                int number = int.Parse(Console.ReadLine());
                
                mas2[i, j] = number;
                }
            }
            for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
            
                
                mas3[i, j] = mas[i, j] * mas2[i, j];
                }
            }

            Console.WriteLine("number of masive ");
            
            for(int i = 0; i < x; i++)
            {
                for(int j = 0; j < y; j++)
                {
                    Console.Write(mas3[i,j]);
                }
                Console.WriteLine(" ");

            } 
        }
        static void Task7()
        {
            int n = 4;
            var mas = new int[n];

            for(int i = 0; i < n; i++)
            {
                for(int j = 0; j < n; j++)
                {
                    if(mas[i] > mas[j])
                    {
                        int l = mas[j];
                        mas[j] = mas[i];
                        mas[i] = l;
                    }
                }
            }

            Console.WriteLine("number of masive ");
            
            for(int i = 0; i < n; i++)
            {
               Console.WriteLine(mas[i]); 
            }
             

        }

    }
}