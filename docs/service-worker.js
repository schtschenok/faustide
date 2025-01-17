/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-d7bfb2c4'], (function (workbox) { 'use strict';

  workbox.setCacheNameDetails({
    prefix: "1.0.1031699733619686"
  });
  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "02-XYLO1.mp3",
    "revision": "362ebc964769a515510a0a67f59232e7"
  }, {
    "url": "assets/1551f4f60c37af51121f.woff2",
    "revision": null
  }, {
    "url": "assets/2285773e6b4b172f07d9.woff",
    "revision": null
  }, {
    "url": "assets/23f19bb08961f37aaf69.eot",
    "revision": null
  }, {
    "url": "assets/2f517e09eb2ca6650ff5.svg",
    "revision": null
  }, {
    "url": "assets/4689f52cc96215721344.svg",
    "revision": null
  }, {
    "url": "assets/491974d108fe4002b2aa.ttf",
    "revision": null
  }, {
    "url": "assets/527940b104eb2ea366c8.ttf",
    "revision": null
  }, {
    "url": "assets/77206a6bb316fa0aded5.eot",
    "revision": null
  }, {
    "url": "assets/7a3337626410ca2f4071.woff2",
    "revision": null
  }, {
    "url": "assets/7a8b4f130182d19a2d7c.svg",
    "revision": null
  }, {
    "url": "assets/9bbb245e67a133f6e486.eot",
    "revision": null
  }, {
    "url": "assets/b797181c93b3755f4fa1.ttf",
    "revision": null
  }, {
    "url": "assets/bb58e57c48a3e911f15f.woff",
    "revision": null
  }, {
    "url": "assets/be9ee23c0c6390141475.ttf",
    "revision": null
  }, {
    "url": "assets/d878b0a6a1144760244f.woff2",
    "revision": null
  }, {
    "url": "assets/eeccf4f66002c6f2ba24.woff",
    "revision": null
  }, {
    "url": "editor.worker.js",
    "revision": "a75c33a61199cbd5bbcaa4028f3e8728"
  }, {
    "url": "examples.json",
    "revision": "2d8bc45dd51342a59ef4a8b067f1d0d4"
  }, {
    "url": "examples/LIBRARIES/aanl.lib",
    "revision": "378ff3c0e46108270dd0d4a106447b38"
  }, {
    "url": "examples/LIBRARIES/all.lib",
    "revision": "0875cafe33c80e6440b2ee466ffdc232"
  }, {
    "url": "examples/LIBRARIES/analyzers.lib",
    "revision": "0d919e6175f7e3017f9aae4a0cc07955"
  }, {
    "url": "examples/LIBRARIES/basics.lib",
    "revision": "7598376cec85bd296ee90ece21a115de"
  }, {
    "url": "examples/LIBRARIES/compressors.lib",
    "revision": "f913aaefc6dcffc8df4d1fda101e4674"
  }, {
    "url": "examples/LIBRARIES/delays.lib",
    "revision": "961cea9a2a3ce65237a7b1beded5564c"
  }, {
    "url": "examples/LIBRARIES/demos.lib",
    "revision": "d3839105f3d6bc39724283e3a1519522"
  }, {
    "url": "examples/LIBRARIES/dx7.lib",
    "revision": "3ec7443b45af67a3405a457c6c558285"
  }, {
    "url": "examples/LIBRARIES/envelopes.lib",
    "revision": "41c1f631f441126d0af25cca88834db7"
  }, {
    "url": "examples/LIBRARIES/fds.lib",
    "revision": "52ca2dfce1987c8af5519f3c33d510f5"
  }, {
    "url": "examples/LIBRARIES/filters.lib",
    "revision": "0fbcc5d7a54b2b295862c41280cdde7b"
  }, {
    "url": "examples/LIBRARIES/hoa.lib",
    "revision": "747dda4b7cd2d0b7085ee72a5cc92d0a"
  }, {
    "url": "examples/LIBRARIES/instruments.lib",
    "revision": "72bb97373f9338c5952696a0cb3c35c5"
  }, {
    "url": "examples/LIBRARIES/interpolators.lib",
    "revision": "a49f941c8128e305872d60ac97f00795"
  }, {
    "url": "examples/LIBRARIES/maths.lib",
    "revision": "26a47e5ce24615b0c20dfa4a1f594a67"
  }, {
    "url": "examples/LIBRARIES/maxmsp.lib",
    "revision": "bc7c62b3037252a441a92cdb63f0f3f5"
  }, {
    "url": "examples/LIBRARIES/mi.lib",
    "revision": "01b38d23808316cfa824eb697efb0c9f"
  }, {
    "url": "examples/LIBRARIES/misceffects.lib",
    "revision": "351f8aba0a97a848e42ffeb2d371b103"
  }, {
    "url": "examples/LIBRARIES/noises.lib",
    "revision": "309cbb10d2f48722056a22dac2512006"
  }, {
    "url": "examples/LIBRARIES/oscillators.lib",
    "revision": "4c81fb0fb20efedb93f25972965fd1b6"
  }, {
    "url": "examples/LIBRARIES/phaflangers.lib",
    "revision": "8a2a73fb9a07efb9c322fca4054c2478"
  }, {
    "url": "examples/LIBRARIES/physmodels.lib",
    "revision": "9e6adefcef85d6a9bee26cfcc0c001d9"
  }, {
    "url": "examples/LIBRARIES/platform.lib",
    "revision": "b676d0e445ac8091a2edc9d447d28f03"
  }, {
    "url": "examples/LIBRARIES/quantizers.lib",
    "revision": "7af533b1b0d10da4a2e078c1e814209e"
  }, {
    "url": "examples/LIBRARIES/reducemaps.lib",
    "revision": "f596892fd0a21c77e682e6a501f0b491"
  }, {
    "url": "examples/LIBRARIES/reverbs.lib",
    "revision": "95fb9f7ee7b48e161a023002f5377a1b"
  }, {
    "url": "examples/LIBRARIES/routes.lib",
    "revision": "2c333d48c4398c010f2db86d64858f74"
  }, {
    "url": "examples/LIBRARIES/sf.lib",
    "revision": "0591d285b0940ae0dec7406b1e827240"
  }, {
    "url": "examples/LIBRARIES/signals.lib",
    "revision": "2e4836686a8f8d61652aed73f73daebf"
  }, {
    "url": "examples/LIBRARIES/soundfiles.lib",
    "revision": "38f5cd8daed41d6051a4eb3bb56cc613"
  }, {
    "url": "examples/LIBRARIES/spats.lib",
    "revision": "89768e21cfa62ef7472f55356c752288"
  }, {
    "url": "examples/LIBRARIES/stdfaust.lib",
    "revision": "207cb1b00e7834e9e426770d5251a32a"
  }, {
    "url": "examples/LIBRARIES/synths.lib",
    "revision": "fdc13e29620430426e36cd6ff1f4504f"
  }, {
    "url": "examples/LIBRARIES/tonestacks.lib",
    "revision": "44ff1c2dbe8cf57db10d64a051d220c7"
  }, {
    "url": "examples/LIBRARIES/tubes.lib",
    "revision": "e38f7360c01f029b4949171286fcab36"
  }, {
    "url": "examples/LIBRARIES/vaeffects.lib",
    "revision": "836ccb8d0ffe783994fd702def7fa226"
  }, {
    "url": "examples/LIBRARIES/version.lib",
    "revision": "0f6637a73cc30a238c7dabacd478652a"
  }, {
    "url": "examples/LIBRARIES/wdmodels.lib",
    "revision": "cd6e246e998a47f6650a4210860e78af"
  }, {
    "url": "examples/LIBRARIES/webaudio.lib",
    "revision": "bc74700d6e0c65d546df98c30a05980e"
  }, {
    "url": "examples/ambisonics/fourSourcesToOcto.dsp",
    "revision": "c35f353d122330513b0bb3a156d22ca3"
  }, {
    "url": "examples/ambisonics/oneSourceToStereo.dsp",
    "revision": "0e0a36594fc0b405b68c44410a21db16"
  }, {
    "url": "examples/analysis/FFT.dsp",
    "revision": "90413b80aef0cd3bb430c8eb94581f13"
  }, {
    "url": "examples/analysis/dbmeter.dsp",
    "revision": "6b99238fe379ed783ac3fc8ef8052446"
  }, {
    "url": "examples/analysis/spectralLevel.dsp",
    "revision": "2a5558c61e3fde63685f929b3901ba39"
  }, {
    "url": "examples/analysis/spectralTiltLab.dsp",
    "revision": "c8b98f4e2c67227e3a7d4a3559819181"
  }, {
    "url": "examples/analysis/vumeter.dsp",
    "revision": "aa8e0a06d534b9e671ee6b2720a1def6"
  }, {
    "url": "examples/bela/AdditiveSynth.dsp",
    "revision": "3684a5047e34ae51e8de425a14fcb215"
  }, {
    "url": "examples/bela/AdditiveSynth_Analog.dsp",
    "revision": "5e7938d264c274d8e7f99233e998502c"
  }, {
    "url": "examples/bela/FMSynth2.dsp",
    "revision": "b8f831feeb090cf7e41e75dc6d11daf5"
  }, {
    "url": "examples/bela/FMSynth2_Analog.dsp",
    "revision": "fa357019e74f690094c8e4e40335734b"
  }, {
    "url": "examples/bela/FMSynth2_FX.dsp",
    "revision": "4f7d9e79e45b2d85f54470d4d7acc412"
  }, {
    "url": "examples/bela/FMSynth2_FX_Analog.dsp",
    "revision": "a08876f9bc8557721c880f2fb0dd2d1c"
  }, {
    "url": "examples/bela/FXChaine2.dsp",
    "revision": "aa96863646b6d03aaa991d17c7e03fc5"
  }, {
    "url": "examples/bela/Faust-complement.lib",
    "revision": "1cce7f46cea6d60aee3a02ea5e65ba5a"
  }, {
    "url": "examples/bela/GrainGenerator.dsp",
    "revision": "acf9ad0948ad6994f05ddf495f294fdd"
  }, {
    "url": "examples/bela/WaveSynth.dsp",
    "revision": "4ee091bfb2f0ee9f6f1e368e36e4ca9c"
  }, {
    "url": "examples/bela/WaveSynth_Analog.dsp",
    "revision": "c6f075b6f03af7b04996586d1e8a4e67"
  }, {
    "url": "examples/bela/WaveSynth_FX.dsp",
    "revision": "6da063c108b4f098bdad383e8d694c14"
  }, {
    "url": "examples/bela/WaveSynth_FX_Analog.dsp",
    "revision": "452060418f39ee5fbd3fbf7b560190a4"
  }, {
    "url": "examples/bela/crossDelay2.dsp",
    "revision": "846ebd21681312771dba0b301c345dce"
  }, {
    "url": "examples/bela/granulator.dsp",
    "revision": "a98b1d817ba305a916ec82ce4bd2b4c8"
  }, {
    "url": "examples/bela/repeater.dsp",
    "revision": "e9443be37f5df97d1e6942bf06611931"
  }, {
    "url": "examples/bela/simpleFX.dsp",
    "revision": "ce9bcf351e0be8bb74643d1b7114eac7"
  }, {
    "url": "examples/bela/simpleFX_Analog.dsp",
    "revision": "46aec578a8f735f40af7cfb97cd66902"
  }, {
    "url": "examples/bela/simpleSynth.dsp",
    "revision": "b9f06e66e59d1fbece4570964da565fc"
  }, {
    "url": "examples/bela/simpleSynth_Analog.dsp",
    "revision": "5cf58590f483e8485a9fd6e6b1976685"
  }, {
    "url": "examples/bela/simpleSynth_FX.dsp",
    "revision": "8f3dcb7da48dd80431f5fa5bca73a588"
  }, {
    "url": "examples/bela/simpleSynth_FX_Analog.dsp",
    "revision": "a84e365e73b172369b965291527906dd"
  }, {
    "url": "examples/delayEcho/echo.dsp",
    "revision": "62315eb0632d93d36990b30f73129342"
  }, {
    "url": "examples/delayEcho/quadEcho.dsp",
    "revision": "c86271cabfd914118268a2fe75010f0e"
  }, {
    "url": "examples/delayEcho/smoothDelay.dsp",
    "revision": "586529956486d4264e6703ebc4732956"
  }, {
    "url": "examples/delayEcho/stereoEcho.dsp",
    "revision": "5aada5b6cc03f3c174eba0b91d44549f"
  }, {
    "url": "examples/delayEcho/tapiir.dsp",
    "revision": "5005016ecf00e7ffc9022ca95a7835e8"
  }, {
    "url": "examples/dynamic/compressor.dsp",
    "revision": "deb26c335be6e61835d3d86b9918d45e"
  }, {
    "url": "examples/dynamic/distortion.dsp",
    "revision": "3c48c133b4493d506e2882fbf1eed991"
  }, {
    "url": "examples/dynamic/gateCompressor.dsp",
    "revision": "82e7dfeb3f3861176ea2f027d8f6bd8e"
  }, {
    "url": "examples/dynamic/noiseGate.dsp",
    "revision": "5cef3465eb2445dbce4672a55e4c0af1"
  }, {
    "url": "examples/dynamic/volume.dsp",
    "revision": "3b0febd96a24dbcf252b271516e5ce9d"
  }, {
    "url": "examples/filtering/APF.dsp",
    "revision": "e7997002c33fbbebcdcf9708ee00e9b6"
  }, {
    "url": "examples/filtering/BPF.dsp",
    "revision": "bcd6ebfd66a6a83770418c6f999e678c"
  }, {
    "url": "examples/filtering/DNN.dsp",
    "revision": "bbf5fa9890ceb398ef6619ad27cc2709"
  }, {
    "url": "examples/filtering/HPF.dsp",
    "revision": "59c67ce105ccefa6d421aff98aa6ddc3"
  }, {
    "url": "examples/filtering/LPF.dsp",
    "revision": "eb5ab62470d21be58af3ec9464d99b4a"
  }, {
    "url": "examples/filtering/bandFilter.dsp",
    "revision": "732b013fc7e6a036e7e4de4fee5dd5d7"
  }, {
    "url": "examples/filtering/cryBaby.dsp",
    "revision": "a5e420786671c5fb0f4d7b2e690c78b0"
  }, {
    "url": "examples/filtering/diodeLadder.dsp",
    "revision": "9bd5311aeae2069c9f484a2187a0cac1"
  }, {
    "url": "examples/filtering/filterBank.dsp",
    "revision": "0e2203517b85214063bc29660bec1474"
  }, {
    "url": "examples/filtering/graphicEqLab.dsp",
    "revision": "c29aab7b38d5239a5bbfef8db8dc545b"
  }, {
    "url": "examples/filtering/highShelf.dsp",
    "revision": "7d4996280530be2f08cfdcc933ccc746"
  }, {
    "url": "examples/filtering/korg35HPF.dsp",
    "revision": "dfb8e5089ff7d9493885b59eeda391d0"
  }, {
    "url": "examples/filtering/korg35LPF.dsp",
    "revision": "70bb92bdb74dca9d5fd0f97b3e4d5d39"
  }, {
    "url": "examples/filtering/lfBoost.dsp",
    "revision": "2de5015a15f4d168b7188965067550b9"
  }, {
    "url": "examples/filtering/lowBoost.dsp",
    "revision": "38dce5f90edc3fd1baebdbe02758a2f3"
  }, {
    "url": "examples/filtering/lowCut.dsp",
    "revision": "5198795081c6cb44b644f0a4c37d14fb"
  }, {
    "url": "examples/filtering/lowShelf.dsp",
    "revision": "f6bfbf6bddd3eb4c55d51542aececd8c"
  }, {
    "url": "examples/filtering/moogHalfLadder.dsp",
    "revision": "8953899c75cf06c982d52fd474e683a3"
  }, {
    "url": "examples/filtering/moogLadder.dsp",
    "revision": "558fd596b20b8099623f92b4f49e7a2b"
  }, {
    "url": "examples/filtering/moogVCF.dsp",
    "revision": "708340d07f59f9738222321ce453d159"
  }, {
    "url": "examples/filtering/multibandFilter.dsp",
    "revision": "6c9134ccae9632f20695f5e8c9a594c2"
  }, {
    "url": "examples/filtering/notch.dsp",
    "revision": "cb0c2ef5f17b3a80f289627d36f17e2f"
  }, {
    "url": "examples/filtering/oberheim.dsp",
    "revision": "6b0435b55b32d2b3f6a59b5cf562b4bd"
  }, {
    "url": "examples/filtering/oberheimBPF.dsp",
    "revision": "03e9637b29c0d3a5854e3154495e1c71"
  }, {
    "url": "examples/filtering/oberheimBSF.dsp",
    "revision": "4d24cbbce7034b91956ca675d2952821"
  }, {
    "url": "examples/filtering/oberheimHPF.dsp",
    "revision": "077fa7e14c462b662bb4d573879ad30b"
  }, {
    "url": "examples/filtering/oberheimLPF.dsp",
    "revision": "ea0fb373d3e93439ed12e631e6c7dd14"
  }, {
    "url": "examples/filtering/parametricEqLab.dsp",
    "revision": "155dff6d4d61ec232518296474319dbf"
  }, {
    "url": "examples/filtering/parametricEqualizer.dsp",
    "revision": "3a59ee719929e0b0f6dc08f969051cd9"
  }, {
    "url": "examples/filtering/peakNotch.dsp",
    "revision": "8ac3cc5375d2fd3c424b63296e800366"
  }, {
    "url": "examples/filtering/peakingEQ.dsp",
    "revision": "4ab2bc731b8c0a5c9cb0f27019b085ed"
  }, {
    "url": "examples/filtering/sallenKey2ndOrder.dsp",
    "revision": "dda20093d5573cde4ee28b48be4716fb"
  }, {
    "url": "examples/filtering/sallenKey2ndOrderBPF.dsp",
    "revision": "1563279ac037ea830cf577efaf1586d8"
  }, {
    "url": "examples/filtering/sallenKey2ndOrderHPF.dsp",
    "revision": "9be5b182130ba75dc069e2baae70696c"
  }, {
    "url": "examples/filtering/sallenKey2ndOrderLPF.dsp",
    "revision": "b95bf25dc6f12e81f11db9b14f00ef3c"
  }, {
    "url": "examples/filtering/sallenKeyOnePole.dsp",
    "revision": "46cb4cefd4378095aad2c1a9ec7eb3e0"
  }, {
    "url": "examples/filtering/sallenKeyOnePoleHPF.dsp",
    "revision": "609817e756b23df54e303dea27c8c550"
  }, {
    "url": "examples/filtering/sallenKeyOnePoleLPF.dsp",
    "revision": "b628f58cdf954420ed8d29cb0fd84043"
  }, {
    "url": "examples/filtering/spectralTilt.dsp",
    "revision": "f7d64e8e05e39e46470ee93b1185558c"
  }, {
    "url": "examples/filtering/vcfWahLab.dsp",
    "revision": "23c5c539b49195b962237452327f17ba"
  }, {
    "url": "examples/filtering/vocoder.dsp",
    "revision": "f3d6ba1056313b8ece4eabb7bcbe1f6d"
  }, {
    "url": "examples/filtering/wahPedal.dsp",
    "revision": "d56078a56ce09c7866219cd53449b416"
  }, {
    "url": "examples/gameaudio/bubble.dsp",
    "revision": "3e5ebb8ba597fac908e44ac89fd95698"
  }, {
    "url": "examples/gameaudio/door.dsp",
    "revision": "505116c6a322e7f17845fe41632c08eb"
  }, {
    "url": "examples/gameaudio/fire.dsp",
    "revision": "0d98749c4bb5d36d8cc055f37cc02618"
  }, {
    "url": "examples/gameaudio/insects.dsp",
    "revision": "09f5130828aa7831ad5f12f58eeb5fab"
  }, {
    "url": "examples/gameaudio/rain.dsp",
    "revision": "5e997641b31d6929d80c63ae7659d516"
  }, {
    "url": "examples/gameaudio/wind.dsp",
    "revision": "a0d3d60f2fe30c985a38d4925e24c973"
  }, {
    "url": "examples/generator/filterOsc.dsp",
    "revision": "17177d2dd10d8ec116ac64a1628fcc1a"
  }, {
    "url": "examples/generator/noise.dsp",
    "revision": "3ff6895039fcc9bce42fabb2dc9fd235"
  }, {
    "url": "examples/generator/noiseMetadata.dsp",
    "revision": "efa1e5bf64e800a480e66f1b74b39a50"
  }, {
    "url": "examples/generator/osc.dsp",
    "revision": "c45be4e432d219c71af5622f7efaa4c9"
  }, {
    "url": "examples/generator/osci.dsp",
    "revision": "4ce510671a7bfee73cf81c9b432621df"
  }, {
    "url": "examples/generator/sawtoothLab.dsp",
    "revision": "bcec64f0f0b2e66a0b41db6d3b11b6d0"
  }, {
    "url": "examples/generator/virtualAnalog.dsp",
    "revision": "55b40461b2aa734549882fcfbfd1e374"
  }, {
    "url": "examples/generator/virtualAnalogLab.dsp",
    "revision": "57bd8159053e642ad03328df31cba231"
  }, {
    "url": "examples/misc/UITester.dsp",
    "revision": "1ca60a8b2274c0ad7d27d444b3f7e8c9"
  }, {
    "url": "examples/misc/autopan.dsp",
    "revision": "cfd243f2f916ef90422fb5360be32040"
  }, {
    "url": "examples/misc/capture.dsp",
    "revision": "e7acfb2d353f6efe806b8e136229aafb"
  }, {
    "url": "examples/misc/drumkit.dsp",
    "revision": "b42d2a10ea415a059f2f27fa3a66fabc"
  }, {
    "url": "examples/misc/guitarix.dsp",
    "revision": "dac4fb0721902282accefa422dcdd926"
  }, {
    "url": "examples/misc/matrix.dsp",
    "revision": "c32c77af3482a70522921a91dea50950"
  }, {
    "url": "examples/misc/midiTester.dsp",
    "revision": "153567b14c82e0fb929993af1526c949"
  }, {
    "url": "examples/misc/mixer.dsp",
    "revision": "9ace0651dfa39d392decff6d34899e42"
  }, {
    "url": "examples/misc/statespace.dsp",
    "revision": "4aa15e1b9c2918b03798d4832b634691"
  }, {
    "url": "examples/misc/switcher.dsp",
    "revision": "0bc27727e0199856322977d9e511dc1e"
  }, {
    "url": "examples/misc/tester.dsp",
    "revision": "ff8e7e603a3e94eb8ef353cc73c1a54b"
  }, {
    "url": "examples/misc/tester2.dsp",
    "revision": "0a609f428a9a6f10d6cc6a7f90305e6f"
  }, {
    "url": "examples/phasing/flanger.dsp",
    "revision": "ea139603b7884145abfd0d6721f57d65"
  }, {
    "url": "examples/phasing/phaser.dsp",
    "revision": "73044da544428540382aca7f44cf62a1"
  }, {
    "url": "examples/phasing/phaserFlangerLab.dsp",
    "revision": "f70de8abbd6cf517c0ccb50b5334799b"
  }, {
    "url": "examples/physicalModeling/brass.dsp",
    "revision": "bd3fc5fe909f391f9a96fb3e12995d89"
  }, {
    "url": "examples/physicalModeling/brassMIDI.dsp",
    "revision": "5136e77f3778426c96910edd8198bf13"
  }, {
    "url": "examples/physicalModeling/churchBell.dsp",
    "revision": "6043efb045c8e54da03a5cd15b6b1f76"
  }, {
    "url": "examples/physicalModeling/clarinet.dsp",
    "revision": "b2027e1b734891e0a2d3b47d3f482b66"
  }, {
    "url": "examples/physicalModeling/clarinetMIDI.dsp",
    "revision": "abe52b7c7ba655eae1f42a5386d8a13c"
  }, {
    "url": "examples/physicalModeling/djembeMIDI.dsp",
    "revision": "eaec700f3be75c8148ed22cc235a1528"
  }, {
    "url": "examples/physicalModeling/elecGuitarMIDI.dsp",
    "revision": "4da3367d1d8c010dc60f2da5e01a171f"
  }, {
    "url": "examples/physicalModeling/englishBell.dsp",
    "revision": "15477dac0af3e96e0e8a6782139c4751"
  }, {
    "url": "examples/physicalModeling/faust-stk/NLFeks.dsp",
    "revision": "68cb0e78a4ff8c1b8c57ca5fb639bcfc"
  }, {
    "url": "examples/physicalModeling/faust-stk/NLFfm.dsp",
    "revision": "d1ea99193ffb60358083e2b696dd7797"
  }, {
    "url": "examples/physicalModeling/faust-stk/blowBottle.dsp",
    "revision": "d7ffd2d473e279244771f212e85095e4"
  }, {
    "url": "examples/physicalModeling/faust-stk/bowed.dsp",
    "revision": "f9d751ad37e52c16eac841ad4d9a1c42"
  }, {
    "url": "examples/physicalModeling/faust-stk/brass.dsp",
    "revision": "b89e834b881f686edd332ee79ca16418"
  }, {
    "url": "examples/physicalModeling/faust-stk/clarinet.dsp",
    "revision": "ae1dcfe0288b78b6054d9ee3c2432e68"
  }, {
    "url": "examples/physicalModeling/faust-stk/flute.dsp",
    "revision": "443e84f96002fd8b4ca8fd5bbf445a50"
  }, {
    "url": "examples/physicalModeling/faust-stk/fluteStk.dsp",
    "revision": "ba158454ff62bdebe31fca07fbf4b835"
  }, {
    "url": "examples/physicalModeling/faust-stk/glassHarmonica.dsp",
    "revision": "49a803a1056961f3542ea0c91f8e452f"
  }, {
    "url": "examples/physicalModeling/faust-stk/saxophony.dsp",
    "revision": "b3de4eee3c5c2981b3257d98de8d8249"
  }, {
    "url": "examples/physicalModeling/faust-stk/sitar.dsp",
    "revision": "48b4fdbc45324ce4174df17ebd836334"
  }, {
    "url": "examples/physicalModeling/faust-stk/tibetanBowl.dsp",
    "revision": "8ac929532618d6c35caf2c792444ea33"
  }, {
    "url": "examples/physicalModeling/faust-stk/tunedBar.dsp",
    "revision": "a7585a8f4b69d5248553c7259241ddc0"
  }, {
    "url": "examples/physicalModeling/faust-stk/uniBar.dsp",
    "revision": "4b39716334902ad17e16d627045a2a30"
  }, {
    "url": "examples/physicalModeling/faust-stk/voiceForm.dsp",
    "revision": "e57f4b98947f560a641efaffe1fcb2c1"
  }, {
    "url": "examples/physicalModeling/flute.dsp",
    "revision": "bec08ca4c3210aabfc32565f0ccb6491"
  }, {
    "url": "examples/physicalModeling/fluteMIDI.dsp",
    "revision": "0e2d15be0b32e62288a412afd17e7430"
  }, {
    "url": "examples/physicalModeling/frenchBell.dsp",
    "revision": "4b395546783aec36275ac6854d1f9070"
  }, {
    "url": "examples/physicalModeling/germanBell.dsp",
    "revision": "92031c3fad7703400ea9982c4e8119e9"
  }, {
    "url": "examples/physicalModeling/guitarMIDI.dsp",
    "revision": "2cf72776ff10deb41dd988f9eb25be38"
  }, {
    "url": "examples/physicalModeling/karplus.dsp",
    "revision": "3244d94466fe47f91c918ba0f4c88371"
  }, {
    "url": "examples/physicalModeling/marimbaMIDI.dsp",
    "revision": "994e23f90cca0519dcb490c4826abfe4"
  }, {
    "url": "examples/physicalModeling/modularInterpInstrMIDI.dsp",
    "revision": "09850a48259b6ab63e73bcd19edbdd27"
  }, {
    "url": "examples/physicalModeling/nylonGuitarMIDI.dsp",
    "revision": "19ed80bd495e6e6d1a723fa273f00329"
  }, {
    "url": "examples/physicalModeling/russianBell.dsp",
    "revision": "3a83da099c9f0ea802d217fb18686606"
  }, {
    "url": "examples/physicalModeling/standardBell.dsp",
    "revision": "8f6e7c017b8c147fcee85b5163cf13d8"
  }, {
    "url": "examples/physicalModeling/violin.dsp",
    "revision": "d6a25f8817c94455647c2154f0ad01b6"
  }, {
    "url": "examples/physicalModeling/violinMIDI.dsp",
    "revision": "37bf2502257fd238b729797ebf2a576a"
  }, {
    "url": "examples/physicalModeling/vocalBP.dsp",
    "revision": "58defda1583a40b5cb62a6b189ad2f6c"
  }, {
    "url": "examples/physicalModeling/vocalBPMIDI.dsp",
    "revision": "aeb4e19510ea80d96742964f0bf99845"
  }, {
    "url": "examples/physicalModeling/vocalFOF.dsp",
    "revision": "99eebcc7ecaa2ddf0edd0cf6f24c2c70"
  }, {
    "url": "examples/physicalModeling/vocalFOFMIDI.dsp",
    "revision": "fad3be64e05371954e5b8d94329e8b93"
  }, {
    "url": "examples/pitchShifting/pitchShifter.dsp",
    "revision": "8af78d1b6193065479a66db5e250616e"
  }, {
    "url": "examples/psychoacoustic/harmonicExciter.dsp",
    "revision": "eebb583e71557b35bdab830722f3dedc"
  }, {
    "url": "examples/reverb/dattorro.dsp",
    "revision": "74bf9ec3b48bec59f186631dfa7d4f4c"
  }, {
    "url": "examples/reverb/fdnRev.dsp",
    "revision": "2f6d09723ecb770a3cf5ec15cfca7206"
  }, {
    "url": "examples/reverb/freeverb.dsp",
    "revision": "28c1a2f015bb6d04245de4e61f337904"
  }, {
    "url": "examples/reverb/greyhole.dsp",
    "revision": "6e7b2560602fe7a329acb008f35ddcde"
  }, {
    "url": "examples/reverb/jprev.dsp",
    "revision": "746df8139c2bbae68aefeae0ebfa06d1"
  }, {
    "url": "examples/reverb/reverbDesigner.dsp",
    "revision": "673a0195e3326efe239a6a08cddcaad4"
  }, {
    "url": "examples/reverb/reverbTester.dsp",
    "revision": "4b9a72d08197c0fe387735bfe85b9190"
  }, {
    "url": "examples/reverb/zitaRev.dsp",
    "revision": "60ed38c2a7b89b9ac2ba894e4da7fb0b"
  }, {
    "url": "examples/reverb/zitaRevFDN.dsp",
    "revision": "7cf60a969ab20f197a395e743eb88da1"
  }, {
    "url": "examples/smartKeyboard/acGuitar.dsp",
    "revision": "6f84fc6835ba5d85c00bab72a17ff639"
  }, {
    "url": "examples/smartKeyboard/associatedEffects/elecGuitarEffect.dsp",
    "revision": "4e80b7bb5db377f79f2f26d2e131944d"
  }, {
    "url": "examples/smartKeyboard/associatedEffects/myEffect.dsp",
    "revision": "d44367415a756c2043b6c74c2bde2f4e"
  }, {
    "url": "examples/smartKeyboard/associatedEffects/reverb.dsp",
    "revision": "d44367415a756c2043b6c74c2bde2f4e"
  }, {
    "url": "examples/smartKeyboard/bells.dsp",
    "revision": "5354a5c4629691c6e516ec2c83873515"
  }, {
    "url": "examples/smartKeyboard/bowed.dsp",
    "revision": "136d7d8ab82f63b05ffbc718cf1b365a"
  }, {
    "url": "examples/smartKeyboard/brass.dsp",
    "revision": "2e879bedbabad599c171b79aa4bad80c"
  }, {
    "url": "examples/smartKeyboard/clarinet.dsp",
    "revision": "f95a7b669d4eef692c434681a411adfc"
  }, {
    "url": "examples/smartKeyboard/crazyGuiro.dsp",
    "revision": "fb6f5a3db8c7321012805771cd6f94d0"
  }, {
    "url": "examples/smartKeyboard/drums.dsp",
    "revision": "7ceb354987dc673c47d4903d31d1085d"
  }, {
    "url": "examples/smartKeyboard/dubDub.dsp",
    "revision": "3e226b244cd5bd54b9eedf7b2c1cf9f8"
  }, {
    "url": "examples/smartKeyboard/elecGuitar.dsp",
    "revision": "be26a0dd292be8b795a65c476fde0475"
  }, {
    "url": "examples/smartKeyboard/fm.dsp",
    "revision": "38c1a726632c134b6b9d9193ef8eda71"
  }, {
    "url": "examples/smartKeyboard/frog.dsp",
    "revision": "7dd55eefcfcafadda69ce3a522d08d45"
  }, {
    "url": "examples/smartKeyboard/harp.dsp",
    "revision": "a93f1c0c7ceb6c3de2e5af1b86138565"
  }, {
    "url": "examples/smartKeyboard/midiOnly.dsp",
    "revision": "09e1d9967d7daa792de2fea3e6981f20"
  }, {
    "url": "examples/smartKeyboard/multiSynth.dsp",
    "revision": "e61eb4d284ef24d3cdfd192e82da8289"
  }, {
    "url": "examples/smartKeyboard/toy.dsp",
    "revision": "ab76328f0eea94fed284ce907df2ed2f"
  }, {
    "url": "examples/smartKeyboard/trumpet.dsp",
    "revision": "5811096cf3c60a5eb0a211f286fd99df"
  }, {
    "url": "examples/smartKeyboard/turenas.dsp",
    "revision": "7c8317cbd80093ec8e4af3a835960c20"
  }, {
    "url": "examples/smartKeyboard/violin.dsp",
    "revision": "d8992d89218b94f8a3e743cd0598d1f7"
  }, {
    "url": "examples/smartKeyboard/violin2.dsp",
    "revision": "72733e07a11571f48eaf7628e409f954"
  }, {
    "url": "examples/smartKeyboard/vocal.dsp",
    "revision": "4b5a8c16313c24f9bb4310125bbf0751"
  }, {
    "url": "examples/spat/panpot.dsp",
    "revision": "5fd41980ba09303d50c5898230bb01ac"
  }, {
    "url": "examples/spat/spat.dsp",
    "revision": "8753c9b409ae2331139d94356c952112"
  }, {
    "url": "faust-ui/index.d.ts",
    "revision": "30bf9aeb24b57cf973c2efe9baaab312"
  }, {
    "url": "faust-ui/index.html",
    "revision": "ed0bb4ef2ded005f6f0cf7351ea21406"
  }, {
    "url": "faust-ui/index.js",
    "revision": "bfc52ee4b93064fa054a6618963d9d27"
  }, {
    "url": "favicon.png",
    "revision": "8c793ef1d04148eb48e9595e54950310"
  }, {
    "url": "icon/icon_192.png",
    "revision": "ee7ec1719955d2f9c0bbea290b088d20"
  }, {
    "url": "icon/icon_512.png",
    "revision": "b22ed1b5b20db59704b843dd46076aa5"
  }, {
    "url": "index.html",
    "revision": "db07022757cf774639ee3500fb6789a6"
  }, {
    "url": "index.js",
    "revision": "c0dfe8f960c027605128453da437502b"
  }, {
    "url": "js/0447c04a2a879545304e.js",
    "revision": null
  }, {
    "url": "js/0574c771f6b2276906b3.js",
    "revision": null
  }, {
    "url": "js/09f9aebd27a285656188.js",
    "revision": null
  }, {
    "url": "js/0a243956b6403557db8c.js",
    "revision": null
  }, {
    "url": "js/0d755dc460249badcc85.js",
    "revision": null
  }, {
    "url": "js/11395fdcf0c824378b1b.js",
    "revision": null
  }, {
    "url": "js/179e546e346713dff4ac.js",
    "revision": null
  }, {
    "url": "js/181a50fbc90e05c4a7cf.js",
    "revision": null
  }, {
    "url": "js/1a3f8415f753792ccabf.js",
    "revision": null
  }, {
    "url": "js/1f11664695410dc3bace.js",
    "revision": null
  }, {
    "url": "js/258ae672857550e9c4c5.js",
    "revision": null
  }, {
    "url": "js/2760fcb9bfb07822b69c.js",
    "revision": null
  }, {
    "url": "js/29029c6edbb390e58ded.js",
    "revision": null
  }, {
    "url": "js/2973f5a2a77a9e2bc451.js",
    "revision": null
  }, {
    "url": "js/2e3aa1eaa307e04216b3.js",
    "revision": null
  }, {
    "url": "js/2e7588c460485acce4c5.js",
    "revision": null
  }, {
    "url": "js/2eaf5b27729cddd6d571.js",
    "revision": null
  }, {
    "url": "js/2fd6e1eefb2c93dec258.js",
    "revision": null
  }, {
    "url": "js/31961b7517dfe8eebe45.js",
    "revision": null
  }, {
    "url": "js/320fd7c69f6f0c963981.js",
    "revision": null
  }, {
    "url": "js/32e8917a54e878a1c8a2.js",
    "revision": null
  }, {
    "url": "js/344a92f28a4d49a67c0e.js",
    "revision": null
  }, {
    "url": "js/353dbadf3a7ec09d6178.js",
    "revision": null
  }, {
    "url": "js/38c74530ec2e1493c1aa.js",
    "revision": null
  }, {
    "url": "js/39ac9e5c65f1d0cbc1d2.js",
    "revision": null
  }, {
    "url": "js/3c7289714441e09eb1e0.js",
    "revision": null
  }, {
    "url": "js/414ea5601a6953631dc2.js",
    "revision": null
  }, {
    "url": "js/4238c2c890d73e5ffd54.js",
    "revision": null
  }, {
    "url": "js/42eead714a7d871c60f0.js",
    "revision": null
  }, {
    "url": "js/47323f340e3fefd03d29.js",
    "revision": null
  }, {
    "url": "js/4c659ad26fa60489e3c5.js",
    "revision": null
  }, {
    "url": "js/4ec14e4795cc53d386b0.js",
    "revision": null
  }, {
    "url": "js/549d76012363d578343d.js",
    "revision": null
  }, {
    "url": "js/56c2ad3d43b61670e7f9.js",
    "revision": null
  }, {
    "url": "js/58598ce42c576d618d9f.js",
    "revision": null
  }, {
    "url": "js/5d1469f6125b98d52b19.js",
    "revision": null
  }, {
    "url": "js/5e43715aa7b66e51bdfc.js",
    "revision": null
  }, {
    "url": "js/62129917b8b000c9993f.js",
    "revision": null
  }, {
    "url": "js/62bfcfb6d28b5a4d32c1.js",
    "revision": null
  }, {
    "url": "js/6d6932de73c132e6f9b3.js",
    "revision": null
  }, {
    "url": "js/73fb08de6b3e7fed6871.js",
    "revision": null
  }, {
    "url": "js/76ad40a8284c399987d0.js",
    "revision": null
  }, {
    "url": "js/7f9c27e7d59a4e443c23.js",
    "revision": null
  }, {
    "url": "js/8428c65fd96f8b53d382.js",
    "revision": null
  }, {
    "url": "js/868b29cdeefaafd5cfb7.js",
    "revision": null
  }, {
    "url": "js/8b6ac31212a599aafd83.js",
    "revision": null
  }, {
    "url": "js/9475deb54982556eb44b.js",
    "revision": null
  }, {
    "url": "js/948b16577e780e652668.js",
    "revision": null
  }, {
    "url": "js/9a267724e1ed34e00b60.js",
    "revision": null
  }, {
    "url": "js/9dc3256ceb84da755f90.js",
    "revision": null
  }, {
    "url": "js/9e291f8d5fdabc8e06f6.js",
    "revision": null
  }, {
    "url": "js/9f7ea056cb967b0c8987.js",
    "revision": null
  }, {
    "url": "js/a43a329d9a0f2ba28e79.js",
    "revision": null
  }, {
    "url": "js/acd711ea8c6a7661e7c2.js",
    "revision": null
  }, {
    "url": "js/b3a6345e59c81bd3e172.js",
    "revision": null
  }, {
    "url": "js/b99b437695d4ade3ef2f.js",
    "revision": null
  }, {
    "url": "js/bd50069295e6a126395c.js",
    "revision": null
  }, {
    "url": "js/c2dca5715c8d79acfbc4.js",
    "revision": null
  }, {
    "url": "js/c32f9074cb5c23c4f288.js",
    "revision": null
  }, {
    "url": "js/c3b6c20c58eaa1fbf8ae.js",
    "revision": null
  }, {
    "url": "js/c8689573ae36511c2947.js",
    "revision": null
  }, {
    "url": "js/c9739bc384cbfa7f747a.js",
    "revision": null
  }, {
    "url": "js/cb74851d935568da8659.js",
    "revision": null
  }, {
    "url": "js/ce06a165902be7d2c203.js",
    "revision": null
  }, {
    "url": "js/ce850f79523f5eed6dd2.js",
    "revision": null
  }, {
    "url": "js/cf39dc8df1c22730e2fb.js",
    "revision": null
  }, {
    "url": "js/cf7510aac667db950e67.js",
    "revision": null
  }, {
    "url": "js/d13a2c721ef2c716bd86.js",
    "revision": null
  }, {
    "url": "js/d7ce16f5038f6ba51e51.js",
    "revision": null
  }, {
    "url": "js/d99df7fd3adb49d6246f.js",
    "revision": null
  }, {
    "url": "js/dce0466e6dd965a06c5d.js",
    "revision": null
  }, {
    "url": "js/dd179878988c9b3080fb.js",
    "revision": null
  }, {
    "url": "js/ddfbcae81b17314a59f5.js",
    "revision": null
  }, {
    "url": "js/e0fdbf8635487c19fa8b.js",
    "revision": null
  }, {
    "url": "js/e801aec24771652c3eea.js",
    "revision": null
  }, {
    "url": "js/e9dbc0dc494c50b3f7a1.js",
    "revision": null
  }, {
    "url": "js/ea5d5de5c34840f3b2d9.js",
    "revision": null
  }, {
    "url": "js/eac39fa6313d29aa8377.js",
    "revision": null
  }, {
    "url": "js/ec9ac55b81ff161e2cac.js",
    "revision": null
  }, {
    "url": "js/ede0094b887c30966f8e.js",
    "revision": null
  }, {
    "url": "js/f0d8975c9c8d80df2421.js",
    "revision": null
  }, {
    "url": "js/f14bcbc0d619f3cf4fef.js",
    "revision": null
  }, {
    "url": "js/f28370dcccb368d4950d.js",
    "revision": null
  }, {
    "url": "js/f2d5f5c76d8aaf825bda.js",
    "revision": null
  }, {
    "url": "js/f5beab8ab7123dac4bb5.js",
    "revision": null
  }, {
    "url": "js/faf57641c4bf2f103f25.js",
    "revision": null
  }, {
    "url": "libfaust-wasm.data",
    "revision": "92132a7fd8ca97bc25b9df1a71da1f0d"
  }, {
    "url": "libfaust-wasm.wasm",
    "revision": "ab4bf82bb8d9b49d5d01a45e1e7d5108"
  }, {
    "url": "manifest.json",
    "revision": "f3d06b397bb5cb600d762d38b076fc44"
  }, {
    "url": "primitives.lib",
    "revision": "b7013b8237a947a0698e66ff8b436e9e"
  }], {});
  workbox.cleanupOutdatedCaches();

}));
//# sourceMappingURL=service-worker.js.map
