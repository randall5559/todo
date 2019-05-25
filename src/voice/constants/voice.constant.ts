import {
    Voice,
    VoiceActions
 } from '../models';

export const VOICE = {
    SPEECH_STYLES: 'https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css',
    INSTRUCTION_TEXT: 'Create and remove Groups/Tasks with your voice. Refer the "Do it with your voice" box for sayings.',
    COMMANDS: {
        VOICE_CONTROL_ABORT: '(turn off) (disable) (deactivate) (remove) voice (recognition|test)',
        VOICE_CONTROL_OFF: '(turn off) (disable) (deactivate) (remove) voice control',
        SPEECH_CONTROL_ABORT: '(turn off) (disable) (deactivate) (remove) speech (recognition) (control)',
        ADD_TASK: 'add (new) task *tag',
        REMOVE_TASK: 'remove (the) task *tag',
        EXPAND_ALL: 'expand all (tasks)',
        OPEN_ALL: 'open all (tasks)',
        CLOSE_ALL: 'close all (tasks)',
        COLLAPSE_ALL: 'collapse all (tasks)',
        ADD_GROUP: 'add (new) group *tag',
        REMOVE_GROUP: 'remove (new) group *tag'
    },
    ACTIONS: VoiceActions
}