import React from 'react';

const Icon1 = ({align})=> {
    return (
        <svg width="48" height="32" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: align }} className="App-logo" >
            <title>Thinklet</title>
            <defs>
                <linearGradient x1="0%" y1="100%" y2="0%" id="logo-a">
                    <stop stopColor="#007CFE" stopOpacity="0" offset="0%"></stop>
                    <stop stopColor="#007DFF" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="logo-b">
                    <stop stopColor="#FF4F7A" stopOpacity="0" offset="0%"></stop>
                    <stop stopColor="#FF4F7A" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <rect fill="url(#logo-a)" width="32" height="32" rx="16"></rect>
                <rect fill="url(#logo-b)" x="16" width="32" height="32" rx="16"></rect>
            </g>
        </svg>
    )
}

const Icon2 = ({ align })=> {
    return (
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: align }} className="App-logo" >
        <title>Thinklet</title>
        <defs>
            <radialGradient cy="0%" fx="50%" fy="0%" r="100%" id="logo-gradient">
                <stop stopColor="#FFF" offset="0%"></stop>
                <stop stopColor="#FFF" stopOpacity=".24" offset="100%"></stop>
            </radialGradient>
        </defs>
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-10a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill="url(#logo-gradient)" fillRule="evenodd"></path>
    </svg>)
}

const Icon3 = ({ align })=>{
    return(<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: align }} className="App-logo" >
    <title>Thinklet</title>
    <defs>
        <linearGradient x1="0%" y1="0%" y2="100%" id="logo-a">
            <stop stopColor="#4353FF" offset="0%"></stop>
            <stop stopColor="#4353FF" stopOpacity=".32" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="0%" y1="0%" y2="100%" id="logo-b">
            <stop stopColor="#4353FF" offset="0%"></stop>
            <stop stopColor="#4353FF" stopOpacity=".32" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="0%" y1="0%" y2="100%" id="logo-c">
            <stop stopColor="#78F9FF" stopOpacity=".24" offset="0%"></stop>
            <stop stopColor="#43F1FF" offset="55.496%"></stop>
            <stop stopColor="#43F1FF" stopOpacity=".24" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
        <path d="M4 0h12v16H0V4a4 4 0 0 1 4-4z" fill="url(#logo-a)"></path>
        <path d="M16 16h16v12a4 4 0 0 1-4 4H16V16z" fill="url(#logo-b)"></path>
        <path d="M11.5 20.5H.5v1h10v10h1v-11z" stroke="url(#logo-c)" transform="matrix(-1 0 0 1 12 0)"></path>
        <path d="M31.5.5h-11v1h10v10h1V.5z" stroke="url(#logo-c)" transform="matrix(1 0 0 -1 0 12)"></path>
    </g>
</svg>)
}

const Icon4 = ({ align })=> {
    return(
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: align }} className="App-logo" >
            <title>Thinklet</title>
            <defs>
                <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="logo-a">
                    <stop stopColor="#FFF" stopOpacity=".48" offset="0%"></stop>
                    <stop stopColor="#FFF" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="21.021%" y1="8.197%" y2="50%" id="logo-b">
                    <stop stopColor="#3217BB" offset="0%"></stop>
                    <stop stopColor="#D15680" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M16 8h6a2 2 0 0 1 2 2v6h-6a2 2 0 0 1-2-2V8z" fill="url(#logo-a)"></path>
                <path d="M16 0v8a8 8 0 1 0 8 8h8c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0z" fill="url(#logo-b)"></path>
            </g>
        </svg>
    )
}


export { Icon1, Icon2, Icon3, Icon4 }

