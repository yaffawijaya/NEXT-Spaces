import { PropsWithChildren } from "react";

export const HeroOrbit = ({ children, size, rotation, orbitSpeed, starSpeed }: PropsWithChildren<{ size: number; rotation: number; orbitSpeed: number; starSpeed: number }>) => {
    return (
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            {/* Outer div for the orbit animation */}
            <div
                className={`relative animate-spin`}
                style={{
                    transform: `rotate(${rotation}deg)`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDuration: `${orbitSpeed}s`, // Set orbit speed
                }}
            >
                {/* Inner div for the star animation */}
                <div
                    className='inline-flex'
                    style={{
                        transform: `rotate(${-rotation}deg)`, // Counter-rotation to keep the star upright
                        animationDuration: `${starSpeed}s`,  // Set star speed
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
