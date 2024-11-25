import React, { useEffect, useRef } from 'react';

const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};

const randomIntInRange = (min: number, max: number) => {
    return Math.floor(randomInRange(min, max));
};

const rgb = (red: number, green: number, blue: number) => {
    return { r: red, g: green, b: blue };
};

const rgba = (r: number, g: number, b: number, a: number) => {
    return `rgba(${r},${g},${b},${a})`;
};

const variate = (number: number, variance: number) => {
    return Math.floor(number + variance - randomInRange(-variance, variance));
};

interface BallsBackgroundProps {
    zIndex?: number;
}

const BallsBackground: React.FC<BallsBackgroundProps> = ({ zIndex = -100 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    };

    class GradientBall {
        x: number;
        y: number;
        radius: number;
        speedX: number;
        speedY: number;
        color: string;

        constructor(canvasWidth: number, canvasHeight: number) {
            this.x = randomInRange(0, canvasWidth);
            this.y = randomInRange(0, canvasHeight);
            this.radius = randomInRange(100, 300);
            this.speedX = randomInRange(0.5, 1.5);
            this.speedY = randomInRange(-1, 1);

            const { r, g, b } = rgb(variate(180, 30), variate(221, 20), variate(30, 40));
            this.color = rgba(r, g, b, 0.3);

        }

        draw(ctx: CanvasRenderingContext2D) {
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.radius
            );
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        move(canvasWidth: number, canvasHeight: number) {
            this.x += this.speedX;
            this.y += this.speedY;

            // Bounce off walls
            if (this.x - this.radius < 0 || this.x + this.radius > canvasWidth) {
                this.speedX *= -1;
            }
            if (this.y - this.radius < 0 || this.y + this.radius > canvasHeight) {
                this.speedY *= -1;
            }
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const balls: GradientBall[] = [];
        const ballCount = 4;

        const initBalls = () => {
            balls.length = 0;
            for (let i = 0; i < ballCount; i++) {
                balls.push(new GradientBall(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            balls.forEach(ball => {
                ball.move(canvas.width, canvas.height);
                ball.draw(ctx);
            });

            requestAnimationFrame(animate);
        };

        resizeCanvas();
        initBalls();
        window.addEventListener('resize', resizeCanvas);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: zIndex,
                backgroundColor: '#0c0c0c',
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
            }}
        />
    );
};

export default BallsBackground;