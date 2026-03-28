using System;

namespace MyApp
{
    internal class Circle
    {
        private double radius{ get; set;}

        public Circle()
        {
            this.radius = 0;
        }

        public Circle(double radius)
        {
            this.radius = radius;
        }
        public double GetArea()
        {
            return Math.PI * radius * radius;
        }
        public double GetPerimeter()
        {
            return 2 * Math.PI * radius;
        }
        
    }
}