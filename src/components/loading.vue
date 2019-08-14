<template>
<div class="circles">
<div class="circle pink"> </div>
<div class="circle red"> </div>
</div>    
</template>
<style scoped>
.circle{
width:50px;
height: 50px;
border-radius: 50%;
}
.circles {
    display: flex;  
}
.pink {
    background-color: #F47E60;
    animation: mymove1 3s infinite;
    position :relative;
    left: -20px;    
}
.red {
    background-color: #E15B64;
    animation: mymove2 3s infinite;
    position :relative;
    right: -20px;
}
@keyframes mymove1 {
0% {left: -20px; z-index: 1; }
25% {z-index : 1;}
50% {left: 70px; z-index: 0; }
75% {z-index: 0}
100% {left: -20px; z-index: 0;}
}

@keyframes mymove2 {
0% {right:  -20px; z-index: 0;}
25% {z-index : 0;}
50% {right: 70px; z-index: 1;}
75% {z-index: 1}
100% {right: -20px; z-index: 1;}
}
</style>