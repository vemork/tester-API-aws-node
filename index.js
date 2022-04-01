import http from "k6/http";
import { check, sleep } from "k6";

// const baseUrl = "http://52.90.194.113:3000/stats";
// const baseUrl = "http://52.90.194.113:3000/mutant";

export let options = {
  vus: 10,
  duration: "2s",
  thresholds: {
    // http errors should be less than 1%
    http_req_failed: ['rate<0.01'],
    // 95% of requests must finish within 1000ms.
    http_req_duration: ["p(95)<800"],
  },
};

export default function () {
  // dna: ["ATGCGA", "CAGTGC", "TTATGT", "TTATGT"]
  // dna: ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"],

  // const payload = JSON.stringify({
  //   dna: ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"],
  // });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const dnaDB = [
    ["TTTT", "AAAA", "AAAA", "AAAA"],
    ["AAAA", "AAAA", "AAAA", "TTTT"]
  ]

  let res
  for (let id = 0; id < 2; id++) {
    let payload = JSON.stringify({
      dna: dnaDB[id],
    });
    res = http.post(baseUrl,  payload, params);
  }
  // const res = http.post(baseUrl, payload, params);
  console.log("res :>> ", res.body);
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
