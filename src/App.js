import React, {Component} from 'react'

class App extends Component {

  render(){
    return(
      <div id="resume">

        <div id="Personal_Info" class="Section">
            <div id="Name_Title">
                <p id="Name">Zh Rimel</p>
                <p>Data Scientist</p>
            </div>

            <div id="Contact Info">
                <p>Email: <a>abc@gmail.com</a></p>
                <p>Web: abc.github.io/abc</p>
                <p>Mobile: 01234567890</p>
            </div>
        </div>
        <div class="Section">
            <div class="Sect_Title_div">
                <p class="Sect_Title">Personal Profile</p>
            </div>

            <div class="Section_Content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <div class="Section">
            <div class="Sect_Title_div">
                <p class="Sect_Title">Work Experience</p>
            </div>

            <div class="Section_Content" id="Joblist">
                <div class="Past_Job">
                    <p class="subheading">Job Title at Company (August 2022 – December 2023)</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="Past_Job">
                    <p class="subheading">Job Title 2 at Company 2 (August 2020 – December 2021)</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
        <div class="Section">
            <div class="Sect_Title_div">
                <p class="Sect_Title">Key Skills</p>
            </div>

            <div class="Section_Content">
                <div id="Skill_List">
                    <p>A Key Skill</p>
                    <p>A Key Skill</p>
                    <p>A Key Skill</p>
                    <p>A Key Skill</p>
                    <p>A Key Skill</p>
                    <p>A Key Skill</p>
                    <p>A Key Skill</p>
                    <p>A Key Skill</p>
                    <p>A Key Skill</p>
                </div>
            </div>
        </div>
        <div class="Section" id="Last_Section">
            <div class="Sect_Title_div">
                <p class="Sect_Title">Education</p>
            </div>

            <div class="Section_Content">
                <div class="Past_Education">
                    <p class="subheading">New Jersey Institute of Technology</p>
                    <p>BS in Computer Science</p>
                    <p>2018 - 2022</p>
                    <p>GPA 3.9</p>
                </div>
                <div class="Past_Education">
                    <p class="subheading">New Jersey Institute of Technology</p>
                    <p>MS in Data Science</p>
                    <p>2022 - 2023</p>
                    <p>GPA 4.0</p>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default App;