gdjs.MainGameCode = {};
gdjs.MainGameCode.GDBoxFilledObjects1_1final = [];

gdjs.MainGameCode.GDCircelFilledObjects1_1final = [];

gdjs.MainGameCode.GDLineUpObjects1_1final = [];

gdjs.MainGameCode.GDTriangleFilledObjects1_1final = [];

gdjs.MainGameCode.GDSlidetheShapeLogoObjects1= [];
gdjs.MainGameCode.GDSlidetheShapeLogoObjects2= [];
gdjs.MainGameCode.GDSlidetheShapeLogoObjects3= [];
gdjs.MainGameCode.GDBackgroundObjects1= [];
gdjs.MainGameCode.GDBackgroundObjects2= [];
gdjs.MainGameCode.GDBackgroundObjects3= [];
gdjs.MainGameCode.GDLinesObjects1= [];
gdjs.MainGameCode.GDLinesObjects2= [];
gdjs.MainGameCode.GDLinesObjects3= [];
gdjs.MainGameCode.GDUpBannerObjects1= [];
gdjs.MainGameCode.GDUpBannerObjects2= [];
gdjs.MainGameCode.GDUpBannerObjects3= [];
gdjs.MainGameCode.GDBoxFilledObjects1= [];
gdjs.MainGameCode.GDBoxFilledObjects2= [];
gdjs.MainGameCode.GDBoxFilledObjects3= [];
gdjs.MainGameCode.GDCircelFilledObjects1= [];
gdjs.MainGameCode.GDCircelFilledObjects2= [];
gdjs.MainGameCode.GDCircelFilledObjects3= [];
gdjs.MainGameCode.GDTriangleFilledObjects1= [];
gdjs.MainGameCode.GDTriangleFilledObjects2= [];
gdjs.MainGameCode.GDTriangleFilledObjects3= [];
gdjs.MainGameCode.GDBoxspaceObjects1= [];
gdjs.MainGameCode.GDBoxspaceObjects2= [];
gdjs.MainGameCode.GDBoxspaceObjects3= [];
gdjs.MainGameCode.GDCirclespaceObjects1= [];
gdjs.MainGameCode.GDCirclespaceObjects2= [];
gdjs.MainGameCode.GDCirclespaceObjects3= [];
gdjs.MainGameCode.GDTrianglespaceObjects1= [];
gdjs.MainGameCode.GDTrianglespaceObjects2= [];
gdjs.MainGameCode.GDTrianglespaceObjects3= [];
gdjs.MainGameCode.GDHeartObjects1= [];
gdjs.MainGameCode.GDHeartObjects2= [];
gdjs.MainGameCode.GDHeartObjects3= [];
gdjs.MainGameCode.GDLiveTextObjects1= [];
gdjs.MainGameCode.GDLiveTextObjects2= [];
gdjs.MainGameCode.GDLiveTextObjects3= [];
gdjs.MainGameCode.GDScoreTxtObjects1= [];
gdjs.MainGameCode.GDScoreTxtObjects2= [];
gdjs.MainGameCode.GDScoreTxtObjects3= [];
gdjs.MainGameCode.GDLineUpObjects1= [];
gdjs.MainGameCode.GDLineUpObjects2= [];
gdjs.MainGameCode.GDLineUpObjects3= [];
gdjs.MainGameCode.GDSlidetheShapeObjects1= [];
gdjs.MainGameCode.GDSlidetheShapeObjects2= [];
gdjs.MainGameCode.GDSlidetheShapeObjects3= [];
gdjs.MainGameCode.GDGameStartTextObjects1= [];
gdjs.MainGameCode.GDGameStartTextObjects2= [];
gdjs.MainGameCode.GDGameStartTextObjects3= [];
gdjs.MainGameCode.GDNewObjectObjects1= [];
gdjs.MainGameCode.GDNewObjectObjects2= [];
gdjs.MainGameCode.GDNewObjectObjects3= [];
gdjs.MainGameCode.GDOfflineObjects1= [];
gdjs.MainGameCode.GDOfflineObjects2= [];
gdjs.MainGameCode.GDOfflineObjects3= [];
gdjs.MainGameCode.GDNewObject2Objects1= [];
gdjs.MainGameCode.GDNewObject2Objects2= [];
gdjs.MainGameCode.GDNewObject2Objects3= [];

gdjs.MainGameCode.conditionTrue_0 = {val:false};
gdjs.MainGameCode.condition0IsTrue_0 = {val:false};
gdjs.MainGameCode.condition1IsTrue_0 = {val:false};
gdjs.MainGameCode.condition2IsTrue_0 = {val:false};
gdjs.MainGameCode.condition3IsTrue_0 = {val:false};
gdjs.MainGameCode.conditionTrue_1 = {val:false};
gdjs.MainGameCode.condition0IsTrue_1 = {val:false};
gdjs.MainGameCode.condition1IsTrue_1 = {val:false};
gdjs.MainGameCode.condition2IsTrue_1 = {val:false};
gdjs.MainGameCode.condition3IsTrue_1 = {val:false};
var ClickRight;
var ClickLeft;

gdjs.MainGameCode.eventsList0x6b769c = function(runtimeScene) {

{

gdjs.MainGameCode.GDBoxFilledObjects2.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBoxFilledObjects2[i].getX() == 19 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDBoxFilledObjects2[k] = gdjs.MainGameCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBoxFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBoxFilledObjects2[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDBoxFilledObjects2[k] = gdjs.MainGameCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBoxFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDBoxFilledObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDBoxFilledObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBoxFilledObjects2[i].setX(102);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.MainGameCode.GDBoxFilledObjects2.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBoxFilledObjects2[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDBoxFilledObjects2[k] = gdjs.MainGameCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBoxFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBoxFilledObjects2[i].getX() == 102 ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDBoxFilledObjects2[k] = gdjs.MainGameCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBoxFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDBoxFilledObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDBoxFilledObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBoxFilledObjects2[i].setX(187);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.MainGameCode.GDTriangleFilledObjects2.createFrom(runtimeScene.getObjects("TriangleFilled"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTriangleFilledObjects2[i].getX() == 12 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTriangleFilledObjects2[k] = gdjs.MainGameCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTriangleFilledObjects2[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDTriangleFilledObjects2[k] = gdjs.MainGameCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTriangleFilledObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDTriangleFilledObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDTriangleFilledObjects2[i].setX(95);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.MainGameCode.GDTriangleFilledObjects2.createFrom(runtimeScene.getObjects("TriangleFilled"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTriangleFilledObjects2[i].getX() == 95 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTriangleFilledObjects2[k] = gdjs.MainGameCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTriangleFilledObjects2[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDTriangleFilledObjects2[k] = gdjs.MainGameCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTriangleFilledObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDTriangleFilledObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDTriangleFilledObjects2[i].setX(181);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.MainGameCode.GDCircelFilledObjects2.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDCircelFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDCircelFilledObjects2[i].getX() == 18 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDCircelFilledObjects2[k] = gdjs.MainGameCode.GDCircelFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDCircelFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDCircelFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDCircelFilledObjects2[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDCircelFilledObjects2[k] = gdjs.MainGameCode.GDCircelFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDCircelFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDCircelFilledObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDCircelFilledObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDCircelFilledObjects2[i].setX(101);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.MainGameCode.GDCircelFilledObjects1.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.MainGameCode.GDLineUpObjects1.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDCircelFilledObjects1[i].getX() == 101 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDCircelFilledObjects1[k] = gdjs.MainGameCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDCircelFilledObjects1.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDCircelFilledObjects1[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects1[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDCircelFilledObjects1[k] = gdjs.MainGameCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDCircelFilledObjects1.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDCircelFilledObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDCircelFilledObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDCircelFilledObjects1[i].setX(186);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


}; //End of gdjs.MainGameCode.eventsList0x6b769c
gdjs.MainGameCode.eventsList0x699e74 = function(runtimeScene) {

{

gdjs.MainGameCode.GDBoxFilledObjects2.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBoxFilledObjects2[i].getX() == 187 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDBoxFilledObjects2[k] = gdjs.MainGameCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBoxFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBoxFilledObjects2[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDBoxFilledObjects2[k] = gdjs.MainGameCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBoxFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDBoxFilledObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDBoxFilledObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBoxFilledObjects2[i].setX(102);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.MainGameCode.GDBoxFilledObjects2.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBoxFilledObjects2[i].getX() == 102 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDBoxFilledObjects2[k] = gdjs.MainGameCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBoxFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBoxFilledObjects2[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDBoxFilledObjects2[k] = gdjs.MainGameCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBoxFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDBoxFilledObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDBoxFilledObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBoxFilledObjects2[i].setX(19);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.MainGameCode.GDTriangleFilledObjects2.createFrom(runtimeScene.getObjects("TriangleFilled"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTriangleFilledObjects2[i].getX() == 181 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTriangleFilledObjects2[k] = gdjs.MainGameCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTriangleFilledObjects2[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDTriangleFilledObjects2[k] = gdjs.MainGameCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTriangleFilledObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDTriangleFilledObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDTriangleFilledObjects2[i].setX(95);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.MainGameCode.GDTriangleFilledObjects2.createFrom(runtimeScene.getObjects("TriangleFilled"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTriangleFilledObjects2[i].getX() == 95 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTriangleFilledObjects2[k] = gdjs.MainGameCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTriangleFilledObjects2[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDTriangleFilledObjects2[k] = gdjs.MainGameCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTriangleFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTriangleFilledObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDTriangleFilledObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDTriangleFilledObjects2[i].setX(12);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.MainGameCode.GDCircelFilledObjects2.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDCircelFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDCircelFilledObjects2[i].getX() == 186 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDCircelFilledObjects2[k] = gdjs.MainGameCode.GDCircelFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDCircelFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDCircelFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDCircelFilledObjects2[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects2.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects2[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDCircelFilledObjects2[k] = gdjs.MainGameCode.GDCircelFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDCircelFilledObjects2.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDCircelFilledObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDCircelFilledObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDCircelFilledObjects2[i].setX(101);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


{

gdjs.MainGameCode.GDCircelFilledObjects1.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.MainGameCode.GDLineUpObjects1.createFrom(runtimeScene.getObjects("LineUp"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDCircelFilledObjects1[i].getX() == 101 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDCircelFilledObjects1[k] = gdjs.MainGameCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDCircelFilledObjects1.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDCircelFilledObjects1[i].getY() <= (( gdjs.MainGameCode.GDLineUpObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDLineUpObjects1[0].getPointY("")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LineTouch")) ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDCircelFilledObjects1[k] = gdjs.MainGameCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDCircelFilledObjects1.length = k;}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SwipeSlide")) == 0;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDCircelFilledObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDCircelFilledObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDCircelFilledObjects1[i].setX(18);
}
}{runtimeScene.getVariables().get("SwipeSlide").setNumber(1);
}}

}


}; //End of gdjs.MainGameCode.eventsList0x699e74
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBoxFilledObjects2Objects = Hashtable.newFrom({"BoxFilled": gdjs.MainGameCode.GDBoxFilledObjects2});gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTriangleFilledObjects2Objects = Hashtable.newFrom({"TriangleFilled": gdjs.MainGameCode.GDTriangleFilledObjects2});gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDCircelFilledObjects1Objects = Hashtable.newFrom({"CircelFilled": gdjs.MainGameCode.GDCircelFilledObjects1});gdjs.MainGameCode.eventsList0x68db54 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDBoxFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBoxFilledObjects2Objects, 19, -(13), "");
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 1;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDTriangleFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTriangleFilledObjects2Objects, 12, -(13), "");
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 2;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDCircelFilledObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDCircelFilledObjects1Objects, 18, -(13), "");
}}

}


}; //End of gdjs.MainGameCode.eventsList0x68db54
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBoxFilledObjects2Objects = Hashtable.newFrom({"BoxFilled": gdjs.MainGameCode.GDBoxFilledObjects2});gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTriangleFilledObjects2Objects = Hashtable.newFrom({"TriangleFilled": gdjs.MainGameCode.GDTriangleFilledObjects2});gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDCircelFilledObjects1Objects = Hashtable.newFrom({"CircelFilled": gdjs.MainGameCode.GDCircelFilledObjects1});gdjs.MainGameCode.eventsList0x6ffc14 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDBoxFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBoxFilledObjects2Objects, 102, -(13), "");
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 1;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDTriangleFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTriangleFilledObjects2Objects, 95, -(13), "");
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 2;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDCircelFilledObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDCircelFilledObjects1Objects, 101, -(13), "");
}}

}


}; //End of gdjs.MainGameCode.eventsList0x6ffc14
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBoxFilledObjects2Objects = Hashtable.newFrom({"BoxFilled": gdjs.MainGameCode.GDBoxFilledObjects2});gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTriangleFilledObjects2Objects = Hashtable.newFrom({"TriangleFilled": gdjs.MainGameCode.GDTriangleFilledObjects2});gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDCircelFilledObjects1Objects = Hashtable.newFrom({"CircelFilled": gdjs.MainGameCode.GDCircelFilledObjects1});gdjs.MainGameCode.eventsList0x67da54 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDBoxFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBoxFilledObjects2Objects, 187, -(13), "");
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 1;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDTriangleFilledObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTriangleFilledObjects2Objects, 181, -(13), "");
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapes")) == 2;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDCircelFilledObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDCircelFilledObjects1Objects, 186, -(13), "");
}}

}


}; //End of gdjs.MainGameCode.eventsList0x67da54
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDLineUpObjects2Objects = Hashtable.newFrom({"LineUp": gdjs.MainGameCode.GDLineUpObjects2});gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBoxFilledObjects2Objects = Hashtable.newFrom({"BoxFilled": gdjs.MainGameCode.GDBoxFilledObjects2});gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDLineUpObjects2Objects = Hashtable.newFrom({"LineUp": gdjs.MainGameCode.GDLineUpObjects2});gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTriangleFilledObjects2Objects = Hashtable.newFrom({"TriangleFilled": gdjs.MainGameCode.GDTriangleFilledObjects2});gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDLineUpObjects2Objects = Hashtable.newFrom({"LineUp": gdjs.MainGameCode.GDLineUpObjects2});gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDCircelFilledObjects2Objects = Hashtable.newFrom({"CircelFilled": gdjs.MainGameCode.GDCircelFilledObjects2});gdjs.MainGameCode.eventsList0x6b5eac = function(runtimeScene) {

{

gdjs.MainGameCode.GDBoxFilledObjects2.createFrom(gdjs.MainGameCode.GDBoxFilledObjects1);


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBoxFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBoxFilledObjects2[i].getX() == 187 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDBoxFilledObjects2[k] = gdjs.MainGameCode.GDBoxFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBoxFilledObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("score").add(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "RightAns.mp3", false, 50, 1);
}}

}


{

/* Reuse gdjs.MainGameCode.GDBoxFilledObjects1 */

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBoxFilledObjects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDBoxFilledObjects1[i].getX() == 187) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDBoxFilledObjects1[k] = gdjs.MainGameCode.GDBoxFilledObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBoxFilledObjects1.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Lives").sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 20, 1);
}}

}


}; //End of gdjs.MainGameCode.eventsList0x6b5eac
gdjs.MainGameCode.eventsList0x68d5cc = function(runtimeScene) {

{

gdjs.MainGameCode.GDTriangleFilledObjects2.createFrom(gdjs.MainGameCode.GDTriangleFilledObjects1);


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTriangleFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTriangleFilledObjects2[i].getX() == 95 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTriangleFilledObjects2[k] = gdjs.MainGameCode.GDTriangleFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTriangleFilledObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("score").add(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "RightAns.mp3", false, 50, 1);
}}

}


{

/* Reuse gdjs.MainGameCode.GDTriangleFilledObjects1 */

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTriangleFilledObjects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDTriangleFilledObjects1[i].getX() == 95) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTriangleFilledObjects1[k] = gdjs.MainGameCode.GDTriangleFilledObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTriangleFilledObjects1.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Lives").sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 20, 1);
}}

}


}; //End of gdjs.MainGameCode.eventsList0x68d5cc
gdjs.MainGameCode.eventsList0x6afe6c = function(runtimeScene) {

{

gdjs.MainGameCode.GDCircelFilledObjects2.createFrom(gdjs.MainGameCode.GDCircelFilledObjects1);


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDCircelFilledObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDCircelFilledObjects2[i].getX() == 18 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDCircelFilledObjects2[k] = gdjs.MainGameCode.GDCircelFilledObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDCircelFilledObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("score").add(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "RightAns.mp3", false, 50, 1);
}}

}


{

/* Reuse gdjs.MainGameCode.GDCircelFilledObjects1 */

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDCircelFilledObjects1[i].getX() == 18) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDCircelFilledObjects1[k] = gdjs.MainGameCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDCircelFilledObjects1.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Lives").sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 20, 1);
}}

}


}; //End of gdjs.MainGameCode.eventsList0x6afe6c
gdjs.MainGameCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("SwipeSlide").setNumber(0);
}{runtimeScene.getVariables().get("InstansiateShapes").setNumber(gdjs.randomInRange(0, 2));
}{runtimeScene.getVariables().get("InstansiateShapesPos").setNumber(gdjs.randomInRange(0, 2));
}{runtimeScene.getVariables().get("CreateGameObj").setNumber(1);
}{runtimeScene.getVariables().get("boxtouched").setNumber(0);
}{runtimeScene.getVariables().get("LineTouch").setNumber(-(45));
}{runtimeScene.getGame().getVariables().get("score").setNumber(0);
}{runtimeScene.getVariables().get("Lives").setNumber(3);
}{runtimeScene.getVariables().get("IncreaseLineUpY").setNumber(247);
}{runtimeScene.getVariables().get("ShapeSpeed").setNumber(50);
}{runtimeScene.getVariables().get("GameStart").setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "RightAns.mp3", false, 0, 0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong.wav", false, 0, 0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "GameOver.wav", false, 0, 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Offline");
}}


}


{


{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("GameStart").setNumber(1);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Menu");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}}

}


{



}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDBoxFilledObjects1.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.MainGameCode.GDCircelFilledObjects1.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.MainGameCode.GDLineUpObjects1.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.MainGameCode.GDLiveTextObjects1.createFrom(runtimeScene.getObjects("LiveText"));
gdjs.MainGameCode.GDScoreTxtObjects1.createFrom(runtimeScene.getObjects("ScoreTxt"));
gdjs.MainGameCode.GDTriangleFilledObjects1.createFrom(runtimeScene.getObjects("TriangleFilled"));
{for(var i = 0, len = gdjs.MainGameCode.GDTriangleFilledObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDTriangleFilledObjects1[i].addForce(0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ShapeSpeed")), 0);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDBoxFilledObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDBoxFilledObjects1[i].addForce(0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ShapeSpeed")), 0);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDCircelFilledObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDCircelFilledObjects1[i].addForce(0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ShapeSpeed")), 0);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDTriangleFilledObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDTriangleFilledObjects1[i].setLayer("3");
}
}{for(var i = 0, len = gdjs.MainGameCode.GDBoxFilledObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDBoxFilledObjects1[i].setLayer("3");
}
}{for(var i = 0, len = gdjs.MainGameCode.GDCircelFilledObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDCircelFilledObjects1[i].setLayer("3");
}
}{for(var i = 0, len = gdjs.MainGameCode.GDScoreTxtObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDScoreTxtObjects1[i].setString("Score : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}{for(var i = 0, len = gdjs.MainGameCode.GDLiveTextObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDLiveTextObjects1[i].setString("X" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Lives")));
}
}{runtimeScene.getVariables().get("IncreaseLineUpY").sub(0.1);
}{for(var i = 0, len = gdjs.MainGameCode.GDLineUpObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDLineUpObjects1[i].setY(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("IncreaseLineUpY")));
}
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("IncreaseLineUpY")) <= 130;
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("IncreaseLineUpY").setNumber(120);
}{runtimeScene.getVariables().get("ShapeSpeed").add(0.005);
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("IncreaseLineUpY")) >= 130;
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("ShapeSpeed").add(0.05);
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Lives")) <= 0;
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", true);
}}

}


{



}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if(ClickRight){
if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.MainGameCode.eventsList0x6b769c(runtimeScene);} //End of subevents
}
}
}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("SwipeSlide").setNumber(0);
}}

}


{



}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if(ClickLeft){
if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.MainGameCode.eventsList0x699e74(runtimeScene);} //End of subevents
}
}
}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("SwipeSlide").setNumber(0);
}}

}


{



}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapesPos")) == 0;
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CreateGameObj")) == 1;
}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("CreateGameObj").setNumber(0);
}
{ //Subevents
gdjs.MainGameCode.eventsList0x68db54(runtimeScene);} //End of subevents
}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapesPos")) == 1;
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CreateGameObj")) == 1;
}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("CreateGameObj").setNumber(0);
}
{ //Subevents
gdjs.MainGameCode.eventsList0x6ffc14(runtimeScene);} //End of subevents
}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("InstansiateShapesPos")) == 2;
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CreateGameObj")) == 1;
}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("CreateGameObj").setNumber(0);
}
{ //Subevents
gdjs.MainGameCode.eventsList0x67da54(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.MainGameCode.GDBoxFilledObjects1.length = 0;

gdjs.MainGameCode.GDCircelFilledObjects1.length = 0;

gdjs.MainGameCode.GDLineUpObjects1.length = 0;

gdjs.MainGameCode.GDTriangleFilledObjects1.length = 0;


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition0IsTrue_0;
gdjs.MainGameCode.GDBoxFilledObjects1_1final.length = 0;gdjs.MainGameCode.GDCircelFilledObjects1_1final.length = 0;gdjs.MainGameCode.GDLineUpObjects1_1final.length = 0;gdjs.MainGameCode.GDTriangleFilledObjects1_1final.length = 0;gdjs.MainGameCode.condition0IsTrue_1.val = false;
gdjs.MainGameCode.condition1IsTrue_1.val = false;
gdjs.MainGameCode.condition2IsTrue_1.val = false;
{
gdjs.MainGameCode.GDBoxFilledObjects2.createFrom(runtimeScene.getObjects("BoxFilled"));
gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.MainGameCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDLineUpObjects2Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBoxFilledObjects2Objects, false, runtimeScene, false);
if( gdjs.MainGameCode.condition0IsTrue_1.val ) {
    gdjs.MainGameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainGameCode.GDBoxFilledObjects2.length;j<jLen;++j) {
        if ( gdjs.MainGameCode.GDBoxFilledObjects1_1final.indexOf(gdjs.MainGameCode.GDBoxFilledObjects2[j]) === -1 )
            gdjs.MainGameCode.GDBoxFilledObjects1_1final.push(gdjs.MainGameCode.GDBoxFilledObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.MainGameCode.GDLineUpObjects2.length;j<jLen;++j) {
        if ( gdjs.MainGameCode.GDLineUpObjects1_1final.indexOf(gdjs.MainGameCode.GDLineUpObjects2[j]) === -1 )
            gdjs.MainGameCode.GDLineUpObjects1_1final.push(gdjs.MainGameCode.GDLineUpObjects2[j]);
    }
}
}
{
gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.MainGameCode.GDTriangleFilledObjects2.createFrom(runtimeScene.getObjects("TriangleFilled"));
gdjs.MainGameCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDLineUpObjects2Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTriangleFilledObjects2Objects, false, runtimeScene, false);
if( gdjs.MainGameCode.condition1IsTrue_1.val ) {
    gdjs.MainGameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainGameCode.GDLineUpObjects2.length;j<jLen;++j) {
        if ( gdjs.MainGameCode.GDLineUpObjects1_1final.indexOf(gdjs.MainGameCode.GDLineUpObjects2[j]) === -1 )
            gdjs.MainGameCode.GDLineUpObjects1_1final.push(gdjs.MainGameCode.GDLineUpObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.MainGameCode.GDTriangleFilledObjects2.length;j<jLen;++j) {
        if ( gdjs.MainGameCode.GDTriangleFilledObjects1_1final.indexOf(gdjs.MainGameCode.GDTriangleFilledObjects2[j]) === -1 )
            gdjs.MainGameCode.GDTriangleFilledObjects1_1final.push(gdjs.MainGameCode.GDTriangleFilledObjects2[j]);
    }
}
}
{
gdjs.MainGameCode.GDCircelFilledObjects2.createFrom(runtimeScene.getObjects("CircelFilled"));
gdjs.MainGameCode.GDLineUpObjects2.createFrom(runtimeScene.getObjects("LineUp"));
gdjs.MainGameCode.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDLineUpObjects2Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDCircelFilledObjects2Objects, false, runtimeScene, false);
if( gdjs.MainGameCode.condition2IsTrue_1.val ) {
    gdjs.MainGameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainGameCode.GDCircelFilledObjects2.length;j<jLen;++j) {
        if ( gdjs.MainGameCode.GDCircelFilledObjects1_1final.indexOf(gdjs.MainGameCode.GDCircelFilledObjects2[j]) === -1 )
            gdjs.MainGameCode.GDCircelFilledObjects1_1final.push(gdjs.MainGameCode.GDCircelFilledObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.MainGameCode.GDLineUpObjects2.length;j<jLen;++j) {
        if ( gdjs.MainGameCode.GDLineUpObjects1_1final.indexOf(gdjs.MainGameCode.GDLineUpObjects2[j]) === -1 )
            gdjs.MainGameCode.GDLineUpObjects1_1final.push(gdjs.MainGameCode.GDLineUpObjects2[j]);
    }
}
}
{
gdjs.MainGameCode.GDBoxFilledObjects1.createFrom(gdjs.MainGameCode.GDBoxFilledObjects1_1final);
gdjs.MainGameCode.GDCircelFilledObjects1.createFrom(gdjs.MainGameCode.GDCircelFilledObjects1_1final);
gdjs.MainGameCode.GDLineUpObjects1.createFrom(gdjs.MainGameCode.GDLineUpObjects1_1final);
gdjs.MainGameCode.GDTriangleFilledObjects1.createFrom(gdjs.MainGameCode.GDTriangleFilledObjects1_1final);
}
}
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition1IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7228236);
}
}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("CreateGameObj").setNumber(1);
}{runtimeScene.getVariables().get("InstansiateShapesPos").setNumber(gdjs.randomInRange(0, 2));
}{runtimeScene.getVariables().get("InstansiateShapes").setNumber(gdjs.randomInRange(0, 2));
}}

}


{

gdjs.MainGameCode.GDBoxFilledObjects1.createFrom(runtimeScene.getObjects("BoxFilled"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBoxFilledObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBoxFilledObjects1[i].getY() >= 275 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDBoxFilledObjects1[k] = gdjs.MainGameCode.GDBoxFilledObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBoxFilledObjects1.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDBoxFilledObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDBoxFilledObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDBoxFilledObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.MainGameCode.eventsList0x6b5eac(runtimeScene);} //End of subevents
}

}


{

gdjs.MainGameCode.GDTriangleFilledObjects1.createFrom(runtimeScene.getObjects("TriangleFilled"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTriangleFilledObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTriangleFilledObjects1[i].getY() >= 274 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTriangleFilledObjects1[k] = gdjs.MainGameCode.GDTriangleFilledObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTriangleFilledObjects1.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTriangleFilledObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDTriangleFilledObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDTriangleFilledObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.MainGameCode.eventsList0x68d5cc(runtimeScene);} //End of subevents
}

}


{

gdjs.MainGameCode.GDCircelFilledObjects1.createFrom(runtimeScene.getObjects("CircelFilled"));

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDCircelFilledObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDCircelFilledObjects1[i].getY() >= 273 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDCircelFilledObjects1[k] = gdjs.MainGameCode.GDCircelFilledObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDCircelFilledObjects1.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameStart")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDCircelFilledObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDCircelFilledObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDCircelFilledObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.MainGameCode.eventsList0x6afe6c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainGameCode.eventsList0xb43b0

const softkeyCallback = {
    ArrowRightClick: function(){ClickRight = true},
    ArrowLeftClick: function(){ClickLeft = true}
};
function handleKeyDown(evt) {
    switch (evt.key) {
      case 'ArrowRight':
            softkeyCallback.ArrowRightClick();
         break;
     case 'ArrowLeft':
            softkeyCallback.ArrowLeftClick();
         break;
    }
};

document.addEventListener('keydown', handleKeyDown);


const keyCallback = {
    ArrowRightClickUp: function(){ClickRight = false},
    ArrowLeftClickUp: function(){ClickLeft = false}
};
function handleKeyUp(evt) {
    switch (evt.key) {
      case 'ArrowRight':
            keyCallback.ArrowRightClickUp();
         break;
     case 'ArrowLeft':
            keyCallback.ArrowLeftClickUp();
         break;
    }
};

document.addEventListener('keyup', handleKeyUp);



gdjs.MainGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainGameCode.GDSlidetheShapeLogoObjects1.length = 0;
gdjs.MainGameCode.GDSlidetheShapeLogoObjects2.length = 0;
gdjs.MainGameCode.GDSlidetheShapeLogoObjects3.length = 0;
gdjs.MainGameCode.GDBackgroundObjects1.length = 0;
gdjs.MainGameCode.GDBackgroundObjects2.length = 0;
gdjs.MainGameCode.GDBackgroundObjects3.length = 0;
gdjs.MainGameCode.GDLinesObjects1.length = 0;
gdjs.MainGameCode.GDLinesObjects2.length = 0;
gdjs.MainGameCode.GDLinesObjects3.length = 0;
gdjs.MainGameCode.GDUpBannerObjects1.length = 0;
gdjs.MainGameCode.GDUpBannerObjects2.length = 0;
gdjs.MainGameCode.GDUpBannerObjects3.length = 0;
gdjs.MainGameCode.GDBoxFilledObjects1.length = 0;
gdjs.MainGameCode.GDBoxFilledObjects2.length = 0;
gdjs.MainGameCode.GDBoxFilledObjects3.length = 0;
gdjs.MainGameCode.GDCircelFilledObjects1.length = 0;
gdjs.MainGameCode.GDCircelFilledObjects2.length = 0;
gdjs.MainGameCode.GDCircelFilledObjects3.length = 0;
gdjs.MainGameCode.GDTriangleFilledObjects1.length = 0;
gdjs.MainGameCode.GDTriangleFilledObjects2.length = 0;
gdjs.MainGameCode.GDTriangleFilledObjects3.length = 0;
gdjs.MainGameCode.GDBoxspaceObjects1.length = 0;
gdjs.MainGameCode.GDBoxspaceObjects2.length = 0;
gdjs.MainGameCode.GDBoxspaceObjects3.length = 0;
gdjs.MainGameCode.GDCirclespaceObjects1.length = 0;
gdjs.MainGameCode.GDCirclespaceObjects2.length = 0;
gdjs.MainGameCode.GDCirclespaceObjects3.length = 0;
gdjs.MainGameCode.GDTrianglespaceObjects1.length = 0;
gdjs.MainGameCode.GDTrianglespaceObjects2.length = 0;
gdjs.MainGameCode.GDTrianglespaceObjects3.length = 0;
gdjs.MainGameCode.GDHeartObjects1.length = 0;
gdjs.MainGameCode.GDHeartObjects2.length = 0;
gdjs.MainGameCode.GDHeartObjects3.length = 0;
gdjs.MainGameCode.GDLiveTextObjects1.length = 0;
gdjs.MainGameCode.GDLiveTextObjects2.length = 0;
gdjs.MainGameCode.GDLiveTextObjects3.length = 0;
gdjs.MainGameCode.GDScoreTxtObjects1.length = 0;
gdjs.MainGameCode.GDScoreTxtObjects2.length = 0;
gdjs.MainGameCode.GDScoreTxtObjects3.length = 0;
gdjs.MainGameCode.GDLineUpObjects1.length = 0;
gdjs.MainGameCode.GDLineUpObjects2.length = 0;
gdjs.MainGameCode.GDLineUpObjects3.length = 0;
gdjs.MainGameCode.GDSlidetheShapeObjects1.length = 0;
gdjs.MainGameCode.GDSlidetheShapeObjects2.length = 0;
gdjs.MainGameCode.GDSlidetheShapeObjects3.length = 0;
gdjs.MainGameCode.GDGameStartTextObjects1.length = 0;
gdjs.MainGameCode.GDGameStartTextObjects2.length = 0;
gdjs.MainGameCode.GDGameStartTextObjects3.length = 0;
gdjs.MainGameCode.GDNewObjectObjects1.length = 0;
gdjs.MainGameCode.GDNewObjectObjects2.length = 0;
gdjs.MainGameCode.GDNewObjectObjects3.length = 0;
gdjs.MainGameCode.GDOfflineObjects1.length = 0;
gdjs.MainGameCode.GDOfflineObjects2.length = 0;
gdjs.MainGameCode.GDOfflineObjects3.length = 0;
gdjs.MainGameCode.GDNewObject2Objects1.length = 0;
gdjs.MainGameCode.GDNewObject2Objects2.length = 0;
gdjs.MainGameCode.GDNewObject2Objects3.length = 0;

gdjs.MainGameCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['MainGameCode'] = gdjs.MainGameCode;
