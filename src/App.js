import React, { Component } from 'react';
import './App.css';
import About from './components/About'
import SynthList from './components/SynthList'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      synths: [
        {
          id: 1,
          brand: 'Roland',
          name: 'TR-808',
          type: 'Drum Machine',
          description: 'The Roland TR-808 Rhythm Composer, often referred to as the 808, is a drum machine introduced by the Roland Corporation in 1980 and discontinued in 1983. It was one of the earliest programmable drum machines, with which users could create their own rhythms rather than having to use preset patterns.',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Roland_TR-808_%28large%29.jpg/500px-Roland_TR-808_%28large%29.jpg'
        },
        {
          id: 2,
          brand: 'Roland',
          name: 'TR-909',
          type: 'Drum Machine',
          description: 'The Roland TR-909 Rhythm Composer is a drum machine introduced by the Roland Corporation in 1983. It was the first Roland drum machine to use samples (for its cymbal and hi-hat sounds) alongside analog sounds. Designed by Tadao Kikumoto, who also designed the Roland TB-303 synthesizer, the 909 features a 16-step step sequencer and drum sounds that aimed for realism and cost-effectiveness. It is fully programmable, and like its predecessor, the TR-808, it can store entire songs with multiple sections, as opposed to simply storing patterns. It was the first MIDI-equipped drum machine. Around 10,000 units were produced.',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Tr909.jpg/440px-Tr909.jpg'
        },
        {
          id: 3,
          brand: 'Roland',
          name: 'Jupiter-8',
          type: 'Synthesizer',
          description: 'The Jupiter-8, or JP-8, is an eight-voice polyphonic analog subtractive synthesizer introduced by Roland Corporation in early 1981. The Jupiter-8 was Roland\'s flagship synthesizer for the first half of the 1980s. Although it lacked the soon-to-be standard of MIDI control, later model Jupiter-8s did include Roland\'s proprietary DCB interface. The Jupiter-8 had many advanced features for its time, including the ability to split the keyboard into two zones with a separate patch active on each zone.',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Roland_Jupiter-8_Synth%2C_1983_%282039658601%29.jpg/440px-Roland_Jupiter-8_Synth%2C_1983_%282039658601%29.jpg'
        },
        {
          id: 4,
          brand: 'KORG',
          name: 'MicroKORG',
          type: 'Synthesizer',
          description: 'The microKORG is a MIDI-capable virtual analog synthesizer/vocoder from Korg featuring DSP analog modelling. The synth/keyboard is built in such a way that it is essentially a Korg MS-2000 with programmable step arpeggiator (MS-2000 has only six simple patterns), a less advanced vocoder (8 bands instead of 16 bands found on the MS-2000), lack of motion sequencing (MS-2000 had three motion sequences), lack of an XLR microphone input, and in a smaller case with fewer real-time control knobs.',
          image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/MicroKorg.jpg/500px-MicroKorg.jpg'
        },
        {
          id: 5,
          brand: 'Moog',
          name: 'Voyager',
          type: 'Synthesizer',
          description: 'The Minimoog Voyager or Voyager is a monophonic analog synthesizer, designed by Robert Moog and released in 2002 by Moog Music. The Voyager was modeled after the classic Minimoog synthesizer that was popular in the 1970s, and is meant to be a successor to that instrument.',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Minimoog_voyager.jpg'
        },
        {
          id: 6,
          brand: 'Dave Smith Instruments',
          name: 'Tempest',
          type: 'Drum Machine',
          description: 'Tempest is the brainchild of legendary instrument designers, Dave Smith and Roger Linn. It’s a professional drum machine that generates its sounds using six powerful analog synthesis voices, and uses an innovative, performance-oriented operating system that permits an extraordinary level of control to create, edit, arrange, and manipulate beats in real time without ever stopping.',
          image_url: 'https://www.attackmagazine.com/wp-content/uploads/2014/03/tempest.jpg'
        },
        {
          id: 7,
          brand: 'Moog',
          name: 'Sub 37',
          type: 'Synthesizer',
          description: 'The Moog Sub 37 is a monophonic analog synthesizer manufactured by Moog Music from 2014. In May 2017, Moog announced its successor, the Moog Subsequent 37 CV, which featured an additional four assignable CV outputs, and two gate output.',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Moog_Sub_37_-_2014_NAMM_Show.jpg/440px-Moog_Sub_37_-_2014_NAMM_Show.jpg'
        },
        {
          id: 8,
          brand: 'Sequential Circuits',
          name: 'Prophet 5',
          type: 'Synthesizer',
          description: 'The Prophet-5 is an analog synthesizer that was designed and manufactured by Sequential Circuits between 1978 and 1984. With five voices of polyphony, the Prophet-5 is one of the first polyphonic analog synthesizers with patch memory. About 6,000 units were produced in three revisions by Dave Smith and John Bowen. This was later accompanied by the Prophet-10, a version with ten voices of polyphony through an additional circuit board and keyboard.',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/SCI_Prophet_5.jpg/440px-SCI_Prophet_5.jpg'
        },
        {
          id: 9,
          brand: 'Dave Smith Instruments',
          name: 'Mopho X4',
          type: 'Synthesizer',
          description: 'The Mopho x4 builds upon the same award winning voice architecture of the Mopho and Mopho Keyboard, the Mopho x4 boasts huge sound and 4 voice polyphony in an ideally sized, portable, and elegantly designed package. Use it to create huge unison basses, creamy leads, percolating sequences, and ethereal pads.',
          image_url: 'https://trademe.tmcdn.co.nz/photoserver/full/684491613.jpg'
        },
        {
          id: 10,
          brand: 'MFB',
          name: '502',
          type: 'Drum Machine',
          description: 'This is an MFB-502 Drumcomputer analog drum machine. It was modeled after the Roland TR-808. It is midi controllable, very tweakable, and a great way to get an authentic analog 808 drum machine sound without shelling out thousands of dollars. ',
          image_url: 'https://images.reverb.com/image/upload/s--rqwnJrfA--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1411507693/cokoodzbkhptzkmuoduj.jpg'
        },
        {
          id: 11,
          brand: 'Elektron',
          name: 'Machine Drum',
          type: 'Drum Machine',
          description: 'This deep, uncompromising drum machine adds sample playback and real-time sampling to an already powerful synthesis engine. Summing it up is not easy because the SPS1-UW is a frustrating marriage of power and limitation, flexibility and restriction — but it certainly isn\'t boring!',
          image_url: 'http://3.bp.blogspot.com/_rScBRKlTdoE/TM47x5-T3oI/AAAAAAABrpw/_B5glMswvTg/s1600/IMG_5422_sm.jpg'
        },
        {
          id: 12,
          brand: 'Vermona',
          name: 'DRM1 MKIII',
          type: 'Drum Machine',
          description: 'The DRM1 MKIII’s eight instruments generate individual sounds and therefore offer different sound controls. We have carefully scaled these with generous ranges allowing you to create unusual sounds, e.g. from a dedicated snare channel. You decide whether your bass drum sounds short and tight or loooong and voluminous. With a total of 73 controls, the handling of this drum-synthesizer is unmistakably intuitive.',
          image_url: 'https://images.reverb.com/image/upload/s--wi_lX1QP--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1482234856/btdsuq2ik7shkwfloeuu.jpg'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header>
        <h1>SYNTH LAB</h1>
        <p>Curated by Dave Francese</p>
        </header>
        <About />
        <SynthList synths={this.state.synths}/>
      </div>
    );
  }
}

export default App;
