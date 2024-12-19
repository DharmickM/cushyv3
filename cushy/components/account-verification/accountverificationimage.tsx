
'use client'
import { useEffect } from 'react';
import { Spline } from '@splinetool/react-spline';

const SplineViewer = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.51/build/spline-viewer.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Clean up the script on unmount
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            <Spline scene="https://prod.spline.design/iQRZPJqmNsETd9-i/scene.splinecode" />
        </div>
    );
};

export default SplineViewer;