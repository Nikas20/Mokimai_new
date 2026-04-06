using System;

namespace MyApp
{
    internal class Circle : Shape
    {
        private double radius{ get; set;}

        public Circle(double radius)
        {
            this.radius = radius;
        }
        public override double GetArea()
        {
            return Math.PI * radius * radius;
        }
        public double GetPerimeter()
        {
            return 2 * Math.PI * radius;
        }
        
    }
}