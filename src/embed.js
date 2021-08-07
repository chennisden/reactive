import EmbedApp from "./EmbedApp.svelte";

const install = ({ firebaseConfig, reactions, page, reactionText }) => {
  const div = document.getElementById("reactive_widget");
  const app = new EmbedApp({
    target: div,
    props: {
      firebaseConfig,
      page,
      reactions,
      reactionText,
    },
  });
};

const reactive = {};
reactive.install = install;
reactive.version = "1.0.2";

export default reactive;
