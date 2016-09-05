/**
 * Created by Yaroslav Cherednyk on 05.09.2016.
 */
function nav() {
    var s = '';
    for (var p in navigator)
        console.log(p,":",navigator[p]);
}