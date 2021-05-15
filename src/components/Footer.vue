<template>
  <footer>
    <section>
      <img src="@/assets/images/logo.png" alt="logo">
      <span class="text">Get out there & discover your next slope, mountain & destination!</span>
      <span class="terms">Copyright 2019 MNTN, Inc. Terms & Privacy</span>
    </section>
    <section>
      <ul>
        <li class="list-title">More on The Blog</li>
        <li>About MNTN</li>
        <li>Contributors & Writers</li>
        <li>Write For Us</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
      </ul>
      <ul>
        <li class="list-title">More on MNTN</li>
        <li>The Team</li>
        <li>Jobs</li>
        <li>Press</li>
      </ul>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
footer {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 11.927vw 11.11vh 11.927vw;
  width: 100%;

  section {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    min-height: 100%;

    &:first-child {
      align-items: flex-start;
      display: flex;
      flex-direction: column;

      justify-content: flex-start;

      span {
        color: $white-color;
        font-size: 1.125rem;
        line-height: 2rem;

        &.text {
          font-family: $gilroy-bold;
          margin-top: 24px;
          margin-bottom: 11.11vh;
          width: 15.78vw;
        }

        &.terms {
          font-family: $gilroy-normal;
          opacity: 0.5;
        }
      }

    }

    ul {
      list-style: none;

      &:last-child {
        margin-left: 11.04vw;
      }

      li {
        color: $white-color;
        font-family: $gilroy-normal;
        font-size: 1.125rem;
        line-height: 2rem;
        margin-bottom: 16px;

        &.list-title {
          color: #FBD784;
          font-family: $gilroy-bold;
          font-size: 1.5rem;
          margin-bottom: 24px;
        }
      }
    }
  }
}
</style>
