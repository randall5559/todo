import { VoiceActions } from './voice-actions.enum';

export interface Voice {
    SPEECH_STYLES: 'https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css',
    INSTRUCTION_TEXT: 'Create and remove Groups/Tasks with your voice. Refer the "Do it with your voice" box for sayings.',
    COMMANDS: {
        VOICE_CONTROL: '(turn off) (disable) (deactivate) (remove) voice (recognition)',
        SPEECH_CONTROL: '(turn off) (disable) (deactivate) (remove) speech (recognition)',
        ADD_TASK: 'add task *tag',
        REMOVE_TASK: 'remove task *tag'
    },
    ACTIONS: VoiceActions
}