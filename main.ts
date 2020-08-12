/**
 * Checkmark means scanning
 * 
 * Square means not scanning
 * 
 * X means alarm
 */
/**
 * The 0 at the end of the gray icon blocks mean don't have any delay when displaying the icon (default is 400ms)
 */
function Alarm () {
    AlarmState = true
    while (true) {
        if (input.buttonIsPressed(Button.B) && AlarmState == false) {
            return
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
let AlarmState = false
AlarmState = false
basic.forever(function () {
    basic.showIcon(IconNames.Yes, 0)
if (input.lightLevel() > 100) {
        Alarm()
    }
})
