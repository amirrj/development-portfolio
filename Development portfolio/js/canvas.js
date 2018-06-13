(function starryNight()  {

  Pts.namespace( this );
  var space = new CanvasSpace("canvas").setup({bgcolor: "transparent", resize: true, retina: true});
  var form = space.getForm();




  var pts = new Group();

  space.add({ 

    // creatr 200 random points
    start:( bound ) => {
      pts = Create.distributeRandom( space.innerBound, 350 );
    }, 

    animate: (time, ftime) => {
      // make a line and turn it into an "op" (see the guide on Op for more)
      let perpend = new Group( space.center.$subtract(0.1), space.pointer ).op( Line.perpendicularFromPt );
      pts.rotate2D( 0.0005, space.center );

      pts.forEach( (p, i) => {
        // for each point, find the perpendicular to the line
        let lp = perpend( p );
        var ratio = Math.min( 1, 1 - lp.$subtract(p).magnitude()/(space.size.x/2) );
        form.fillOnly( ["#ff3f8e", "#04c2c9", "#2e55c1"][i%3] ).point( p, 1 );
      });
    },

  });
  
  //// ----
  

  space.play();

})();






