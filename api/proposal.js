import { handleProposal } from "../server/proposal.js";

export default {
  fetch(request) {
    return handleProposal(request);
  },
};
