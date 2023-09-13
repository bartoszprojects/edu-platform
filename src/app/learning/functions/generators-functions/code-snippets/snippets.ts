export const generatorsBasics1Snippet =
`
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">generatorsBasics1()<span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">void</span> {
    <span style="color: #008800; font-weight: bold">function</span><span style="color: #333333">*</span> generator1() {
      yield <span style="color: #0000DD; font-weight: bold">1</span>
      yield <span style="color: #0000DD; font-weight: bold">2</span>
      yield <span style="color: #0000DD; font-weight: bold">3</span>
    }

    <span style="color: #888888">// We have to assign generator func to variable to avoid creating next instances. Otherwise, during calling this</span>
    <span style="color: #888888">// func there will be new generator1() instance and it will start from beginning</span>
    <span style="color: #008800; font-weight: bold">const</span> gen1 <span style="color: #333333">=</span> generator1()

    console.log(<span style="background-color: #fff0f0">&#39;generatorsBasics1: &#39;</span>, gen1.next())
    <span style="color: #888888">// output: {value: 1, done: false}</span>
    console.log(<span style="background-color: #fff0f0">&#39;generatorsBasics1: &#39;</span>, gen1.next())
    <span style="color: #888888">// output: {value: 2, done: false}</span>
    console.log(<span style="background-color: #fff0f0">&#39;generatorsBasics1: &#39;</span>, gen1.next())
    <span style="color: #888888">// output: {value: 3, done: false}</span>
    console.log(<span style="background-color: #fff0f0">&#39;generatorsBasics1: &#39;</span>, gen1.next())
    <span style="color: #888888">// output: {value: undefined, done: true}</span>

  }
</pre></div>
`

export const generatorsBasics2Snippet =
`
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">    <span style="color: #008800; font-weight: bold">function</span><span style="color: #333333">*</span> generator2() {
      <span style="color: #008800; font-weight: bold">let</span> numb <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>

      <span style="color: #008800; font-weight: bold">while</span> (<span style="color: #008800; font-weight: bold">true</span>) {
        yield numb<span style="color: #333333">++</span>
      }
    }

    <span style="color: #008800; font-weight: bold">const</span> gen2 <span style="color: #333333">=</span> generator2()

    console.log(<span style="background-color: #fff0f0">&#39;generatorsBasics2: &#39;</span>, gen2.next())
    console.log(<span style="background-color: #fff0f0">&#39;generatorsBasics2: &#39;</span>, gen2.next())
    console.log(<span style="background-color: #fff0f0">&#39;generatorsBasics2: &#39;</span>, gen2.next())

  }
</pre></div>

`

export const generatorsBasics3Snippet =
  `

`

export const generatorsBasics4Snippet =
  `

`

export const generatorsBasics5Snippet =
  `

`

export const generatorsBasics6Snippet =
  `

`
