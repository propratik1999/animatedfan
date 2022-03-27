function startFan(speed){
    if(speed==0)
    {
        document.getElementById('fanboxx').style.animationPlayState= 'paused';
     }
    else if(speed==1)
    {
        document.getElementById('fanboxx').style.animationPlayState= 'running';
        document.getElementById('fanboxx').style.animationDuration='2s';
    }
    else if(speed==2)
    {
        document.getElementById('fanboxx').style.animationPlayState= 'running';
        document.getElementById('fanboxx').style.animationDuration='0.9s';
    }
    else
    {
         document.querySelector('#fanboxx').style.animationPlayState='running';
         document.querySelector('#fanboxx').style.animationDuration='0.1s';
        
    }
}