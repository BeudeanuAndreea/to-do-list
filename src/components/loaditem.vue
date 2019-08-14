<template>
    <div class="container">
        <div class="circle red"></div>
        <div class="circle pink"></div>
        <div class="circle yellow"></div>
        <div class="circle orange"></div>        
    </div>    
</template>
<style scoped>
.container{
    
    margin: 20px auto;
    width: 200px;
    height: 20px;
}
.circle{
    width:20px;
    height:20px;
    border-radius: 50%;
    animation-name: andreea;
    animation: andreea 1.6s infinite;
     transform-origin: 50% 50%;
     position: relative;
     display: inline-block;
}
.red{
    background-color: #FC4309;
    left:0%;
}
.pink{
    background-color: #FF765C;
    animation-delay: 0.2s;
    left: 10%;
}
.yellow{
    background-color: #FFB646;
    animation-delay: 0.4s;
    left: 20%;
}
.orange{
    background-color: #FF9900;
    animation-delay: 0.6s;
    left: 30%;
}
@keyframes andreea {
    0% {transform: scale(0);}
    50% {transform: scale(1);}
    100% {transform: scale(0); }
}
</style>