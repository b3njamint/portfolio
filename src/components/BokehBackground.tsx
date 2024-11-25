import React, { useEffect, useRef } from 'react';

interface BokehBackgroundProps {
    zIndex?: number;
}

const BokehBackground: React.FC<BokehBackgroundProps> = ({ zIndex = -100 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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

    class Bokeh {
        x: number;
        y: number;
        distance: number;
        opacity?: number;
        color: { r: number; g: number; b: number };
        idiosyncracy: number;
        yStep: number;
        radius: number = 0;
        speedCoefficient: number = 0;
        baseOpacity: number = 0;

        constructor(x: number, y: number, distance: number, options: any = {}) {
            this.x = x;
            this.y = y;
            this.distance = distance;
            this.opacity = options.opacity;
            this.color = options.color;
            this.idiosyncracy = Math.random();
            this.yStep = this.idiosyncracy - 0.5;

            this.setAttributes();
        }

        draw(ctx: CanvasRenderingContext2D) {
            const { r, g, b } = this.color;
            const radgrad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
            const baseOpacity = this.baseOpacity;

            if (this.distance < 50) {
                radgrad.addColorStop(0, rgba(r, g, b, baseOpacity));
                radgrad.addColorStop(0.88, rgba(r, g, b, baseOpacity));
                radgrad.addColorStop(0.89, rgba(r, g, b, baseOpacity + 0.01));
                radgrad.addColorStop(0.95, rgba(r, g, b, baseOpacity + 0.02));
                radgrad.addColorStop(1, rgba(r, g, b, 0));
            } else {
                radgrad.addColorStop(0, rgba(r, g, b, baseOpacity + 0.05));
                radgrad.addColorStop(0.8, rgba(r, g, b, baseOpacity));
                radgrad.addColorStop(1, rgba(r, g, b, 0));
            }

            ctx.fillStyle = radgrad;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        setAttributes() {
            const distance = this.distance;
            const maxDistance = 100;
            const maxRadius = 100;
            this.radius = (distance / maxDistance) * maxRadius;
            let coef = (maxDistance - distance) / maxDistance;

            if (distance < 50) {
                coef = (50 - distance) / 50;
            }

            this.speedCoefficient = coef * coef;
            this.baseOpacity =
                this.distance > 50 ? (this.idiosyncracy < 0.2 ? 0.1 : 0.05) : 0.16;
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.globalCompositeOperation = 'lighter';

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            makeDots();
        };

        const dots: Bokeh[] = [];

        const makeSingleDot = (isSmallDot: boolean) => {
            const x = randomIntInRange(0, canvas.width);
            const y = randomIntInRange(0, canvas.height);
            const radius = isSmallDot ? variate(30, 10) : variate(80, 10);
            const color = rgb(variate(180, 30), variate(221, 20), variate(30, 40));
            return new Bokeh(x, y, radius, {
                opacity: 0.5,
                color: color,
            });
        };

        const makeDots = () => {
            dots.length = 0; // Clear existing dots
            const canvasArea = canvas.width * canvas.height;
            const desiredLargeDots = Math.ceil(canvasArea / 40000);
            const desiredSmallDots = Math.ceil(canvasArea / 40000);

            for (let i = 0; i < desiredLargeDots; i++) {
                dots.push(makeSingleDot(false));
            }

            for (let i = 0; i < desiredSmallDots; i++) {
                dots.push(makeSingleDot(true));
            }
        };

        const transform = (dot: Bokeh) => {
            dot.x += 0.3 * dot.speedCoefficient + 0.1;
            dot.y += dot.yStep * dot.speedCoefficient - 0.05;

            // Wrap around horizontally
            if (dot.x > canvas.width + dot.radius) {
                dot.x = 0 - dot.radius;
                dot.y = randomIntInRange(0, canvas.height);
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dots.forEach((dot) => {
                transform(dot);
                dot.draw(ctx);
            });
            requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        makeDots();
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
                backgroundColor: '#00080C',
                width: '100%',
                height: '100%',
            }}
        />
    );
};

export default BokehBackground;