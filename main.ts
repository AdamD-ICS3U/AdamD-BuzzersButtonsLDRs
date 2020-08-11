/**
 * The 0 at the end of the gray icon blocks mean don't have any delay when displaying the icon (default is 400ms)
 */
function Alarm () {
    AlarmState = true
    while (true) {
        if (input.buttonIsPressed(Button.B) && AlarmState == false) {
            // Go back to searching
            break;
        } else if (input.buttonIsPressed(Button.A)) {
            AlarmState = false
            basic.showIcon(IconNames.Square, 0)
        } else if (AlarmState == true) {
            basic.showIcon(IconNames.No, 0)
music.playTone(698, music.beat(BeatFraction.Eighth))
            music.rest(music.beat(BeatFraction.Eighth))
        }
    }
}
let LightLevel = 0
let AlarmState = false
AlarmState = false
/**
 * Checkmark means searching
 * 
 * Square means not searching
 * 
 * X means alarm
 */
basic.forever(function () {
    if (AlarmState == false) {
        LightLevel = input.lightLevel()
        basic.showIcon(IconNames.Yes, 0)
if (LightLevel > 100) {
            Alarm()
        }
    }
})
