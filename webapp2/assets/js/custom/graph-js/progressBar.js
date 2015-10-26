
function progressBar(occupiedData,progressBarElement ){
    var progressbar = $( "#"+progressBarElement );
    progressLabel = $( ".progress-label" );

    progressbar.progressbar({
        value: 0,
        change: function() {
            progressLabel.text( progressbar.progressbar( "value" ) + "%" );
        },
        complete: function() {
            progressLabel.text( progressbar.progressbar( "value" ) + "%" );
        }
    });

    function progress() {
        var val = progressbar.progressbar( "value" ) || 0;

        progressbar.progressbar( "value", val+1 ); // input value from jason

        if ( val < occupiedData-1 ) {
            setTimeout( progress, 5);
        }
    }

    setTimeout( progress, 30 );

}
