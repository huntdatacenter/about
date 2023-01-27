---
layout: page
sidebar: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    //avatar: 'https://github.com/oddgeih-ntnu.png',
    avatar: 'https://backends.it.ntnu.no/user-profile-service/rest/files/8ec5302d-5836-37db-b9ac-942e6288d869',
    name: 'Oddgeir Lingaas Holmen',
    title: 'CEO',
    links: [
      { icon: 'github', link: 'https://github.com/oddgeih-ntnu' },
    ]
  },
  {
    //avatar: 'https://github.com/tommentnu.png',
    avatar: 'https://yt3.googleusercontent.com/ytc/AL5GRJWCXIGqWNDtr7y9pFGHrnH7KfBS_0s-DIKi3nxGyg=s88-c-k-c0x00ffffff-no-rj',
    name: 'Tom-Erik Røberg',
    title: 'CTO',
    links: [
      { icon: 'github', link: 'https://github.com/tommentnu' },
    ]
  },
  {
    avatar: 'https://github.com/matuskosut.png',
    name: 'Matus Kosut',
    title: 'Head of Product Development',
    links: [
      { icon: 'github', link: 'https://github.com/matuskosut' },
      //{ icon: 'twitter', link: 'https://twitter.com/matuskosut' }
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/C4D03AQHhugVsJC3trg/profile-displayphoto-shrink_100_100/0/1635694056251?e=1680134400&v=beta&t=mZ299IROTLXRQaxGh1UzwEwheYrRTz7XKbKZkccuGlI',
    name: 'Qussay Qhazeia',
    title: 'Compliance Officer',
    //links: [
    //  { icon: 'github', link: 'https://github.com/JakubNTNU' },
    //]
  },
  {
    avatar: 'https://github.com/signe-cloud.png',
    name: 'Signe Elisabeth Åsberg',
    title: 'Research Advisor',
    links: [
      { icon: 'github', link: 'https://github.com/signe-cloud' },
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/C4D03AQEbH8dkX2Iskg/profile-displayphoto-shrink_100_100/0/1629879083163?e=1680134400&v=beta&t=Tk3bV8P_XtVu1zNOVwaK66Te6HGRA0MV52lZ1ivwlQE',
    //avatar: 'https://github.com/JakubNTNU.png',
    name: 'Jakub Hudak',
    title: 'Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/JakubNTNU' },
    ]
  },
  {
    avatar: 'https://scontent.ftrd4-1.fna.fbcdn.net/v/t39.30808-6/291898733_441725691294624_2762473677040864481_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vpuqosTtOW8AX_0LCJg&_nc_oc=AQmHGMARK6hgrzcu9Jf5PFjiAxVFqqY8oobuH9sWqQ5rkpPt3h3J82mxFrDe_1rJ7AM&tn=MFetIvO19rG3qhzL&_nc_ht=scontent.ftrd4-1.fna&oh=00_AfDNKaFSbADAjZMw0Vso4fWUVoHAxJB-kKw9tM9Bf4AI-Q&oe=63D7D12E',
    name: 'Ingunn Berg Ferstad',
    title: 'Communication',
    //links: []
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Your experiences in HUNT Cloud are shaped and molded by a small team of scientific instrument makers located at NTNU, Norway.<br><br>Our team consist of five full time employees with a background from medicine, biology, management systems, signal processing and computer science. We collaborate closely on most of our activities, although for clarity, here is a short description of our main responsibility areas.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
