---
title: About us
sidebar: false
pref: false
next: false
aside: false
---

<script setup>

import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://backends.it.ntnu.no/user-profile-service/rest/files/abcdfea3-303c-3992-80b7-068f12994142',
    name: 'Oddgeir Lingaas Holmen',
    title: 'Head of HUNT Cloud',
    link: '/authors/oddgeir-l-holmen',
  },
  {
    avatar: 'img/matus.png',
    name: 'Matus Kosut',
    title: 'CTO',
    link: '/authors/matus-kosut',
  },
  {
    avatar: 'img/qussay.png',
    name: 'Qussay Ghazeia',
    title: 'Compliance Officer',
    link: '/authors/qussay-ghazeia',
  },
  {
    avatar: 'img/jakub.png',
    name: 'Jakub Hudak',
    title: 'Head of operations',
    link: '/authors/jakub-hudak',
  },
  {
    avatar: 'img/ingunn.png',
    name: 'Ingunn Berg Ferstad',
    title: 'Marketing Manager',
    link: '/authors/ingunn-ferstad',
  },
  {
    avatar: 'img/marvin.png',
    name: 'Marvin Muni',
    title: 'Senior DevOps Engineer',
    link: '/authors/marvin-muni',
  },
  {
    avatar: 'img/keisuke.png',
    name: 'Keisuke Konno',
    title: 'Senior Security Engineer',
    link: '/authors/keisuke-konno',
  },
  {
    avatar: 'img/magda.png',
    name: 'Magdalena Duda',
    title: 'Advisor',
    link: '/authors/magdalena-duda',
  },
]

</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      The HUNT Cloud team
    </template>
    <template #lead>
      Your experiences in HUNT Cloud are shaped by a small team of scientific instrument makers located at NTNU in Trondheim, Norway.
    </template>
  </VPTeamPageTitle>
  <div class="team-grid">
    <div v-for="member in members" :key="member.name" class="team-card">
      <a :href="member.link" class="card-content">
        <div class="profile">
          <div class="avatar">
            <img :src="member.avatar" alt="Avatar of {{ member.name }}" />
          </div>
          <h3>{{ member.name }}</h3>
          <p>{{ member.title }}</p>
        </div>
      </a>
    </div>
  </div>
</VPTeamPage>

<!-- <strong>Our team consists of employees with a background from medicine, computer science, management systems, biology and art. We collaborate closely on most of our activities, although for clarity, here is a short description of our main responsibility areas.</strong> -->

<style scoped>
.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1200px;
}

.team-card {
  background: #f1eef0ff;
  border-radius: 15px;
  padding: 30px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* keep card content inside */
.card-content {
  text-align: center;
  color: inherit;  /* keep color black */
  text-decoration: none; /* to remove underlined text */
}

.card-content:hover {
  color: inherit; /* so the text doesn't change color to blue */
}

.avatar {
  justify-self: center; /* to center all the team pictures */
  width: 200px;
  height: 200px;
  border-radius: 50%; /*circle shape*/
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* display full avatar */
}

/* responsive */
@media (max-width: 719px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
