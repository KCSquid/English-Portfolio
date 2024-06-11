import logo from './logo.svg';
import storybook from './storybook.png';
import './App.css';

export default function App() {
  return (
    <>
      <div id='intro'>
        <h1 className='title'>English Portfolio of</h1>
        <h1 className='title gradient' id='titleGrad'>Jahvon</h1>
        <p id='titlebottom'><br /><br /><br />Full Stack Developer with a passion for C++ & Website Creation <i className="fa-solid fa-code"></i></p>
      </div>

      <div className='sectionA section'>
        <h1 className='gradientYellow'>Impact...</h1>
        <img className='right' src='https://images.unsplash.com/photo-1543165796-5426273eaab3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <div className='paragraphLeft'>
          <p>I think the multiple lessons about literary devices have had the most impact on my current learning. Previously, I had no idea what most literary devices were or could not classify what they were (I would think just types of words). Now I can understand how they work and when to use them, and this allows me to write better and will have a great impact in my future 3 years of high school. </p>
        </div>
      </div>

      <div className='sectionB section'>
        <h1 className='gradient'>My Work</h1>
        <img className='left' src='https://images.unsplash.com/photo-1517568730816-501aae259c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <div className='paragraphRight'>
          <p>I am choosing to talk about my Flex Project. I think that project, having me very committed to learning a new thing and using different skills to be successful, gave me many different opportunities to work on transferable skills. For one, I had to problem solve by finding solutions to easily memorize my signs. I also used my self-directed learning (taking no learning from others (other than my mandatory interview)) to teach myself how to sign ASL. Finally, I used digital literacy as an extra by:<br /><br />A. creating/coding a website by myself,<br />B: researching how to do the signs,<br />C: writing in my blog about how I did these things.</p>
        </div>
      </div>

      <div className='sectionC section'>
        <h1 className='gradient'>General Use</h1>
        <img className='right' src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <div className='paragraphLeft'>
          <p>I use my digital literacy every single day due to many classes requiring people to use chromebooks to learn, or coding on my computer to make useful tools. Specifically, I used my coding in another course to get a level 4+ by creating an auto formula solver for math className.</p>
        </div>
      </div>

      <div className='sectionD section'>
        <h1 className='gradient'>Transferable Skills</h1>
        <img className='left' src='https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <div className='paragraphRight'>
          <p>I would still like to improve on my Creativity and Entrepreneurship but specifically my creativity. I find that I can create almost anything I want but have trouble coming up with ideas for things. My creativity can help me find what to do or maybe even write.</p>
        </div>
      </div>

      <div className='sectionE section'>
        <h1 className='gradientGreen'>Growth</h1>
        <img className='right' src='https://images.unsplash.com/photo-1613417668910-98edb18f6e5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <div className='paragraphLeft'>
          <p>I think I experienced the most growth in my independent work. I find that I can achieve much more in dedicated time for things than I could have at the start of this semester. For example, I do not think that I could have even finished this entire organizer in one period while now, I can easily complete the entire thing in less than the entire time.</p>
        </div>
      </div>

      <div className='sectionF section'>
        <h1 className='gradientGreen'>My Work</h1>
        <img id='storybook' className='left' src={storybook}></img>
        <div className='paragraphRight'>
          <p>I think that my storybook was a great example of my personal growth in independent work. I know that my story was done quickly and efficiently, and that I was planning it for a long time. I think that my storybook was done well and that my past self wouldn't have been able to do it to a decent level (leaving it only okay at best.)</p>
        </div>
      </div>

      <div className='sectionG section'>
        <h1 className='gradientGreen'>The Future</h1>
        <img className='right' src='https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <div className='paragraphLeft'>
          <p>I know that I need to still work on my organization skills. My papers are constantly not well taken care of, and I do not have knowledge on where my things might be located. Even though I use a binder, I tend to throw things in without thinking twice which is where I will continue to grow. I am going to maybe use dividers and place my things neatly rather than the messy parts from before.</p>
        </div>
      </div>

      <div className='bottom'></div>
    </>
  )
}