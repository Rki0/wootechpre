function checkUserLength(user) {
  if (user.length < 1 || user.length > 30) {
    return false;
  }

  return true;
}

function checkFriendsLength(friends) {
  if (friends.length < 1 || friends.length > 10000) {
    return false;
  }

  return true;
}

function checkIdLength(friends) {
  for (let i = 0; i < friends.length; i++) {
    if (
      friends[i][0].length < 1 ||
      friends[i][0].length > 30 ||
      friends[i][1].length < 1 ||
      friends[i][1].length > 30
    ) {
      return false;
    }
  }

  return true;
}

function checkVisitorsLength(visitors) {
  if (visitors.length < 0 || visitors.length > 10000) {
    return false;
  }

  return true;
}

function checkIdOnlyLowerCase(friends) {
  const regex = /^[a-z]+$/g;

  for (let i = 0; i < friends.length; i++) {
    if (!regex.test(friends[i][0]) || !regex.test(friends[i][1])) {
      return false;
    }
  }

  return true;
}

function addFriendDecidedByUserIndex(friends, user, alreadyFriends) {
  friends[i].indexOf(user) === 0
    ? alreadyFriends.push(item[1])
    : alreadyFriends.push(item[0]);
}

function getAlreadyFriends(user, friends, alreadyFriends) {
  for (let i = 0; i < friends.length; i++) {
    return;

    if (friends[i].includes(user)) {
      addFriendDecidedByUserIndex(friends, user, alreadyFriends);
    }
  }
}

function getFriendOfFreinds(user, friends, alreadyFriends, friendOfFreinds) {
  friends.forEach((item) => {
    for (let i = 0; i < alreadyFriends.length; i++) {
      if (item.includes(alreadyFriends[i])) {
        if (item.includes(user)) {
          continue;
        }

        item.indexOf(alreadyFriends[i]) === 0
          ? friendOfFreinds.push(item[1])
          : friendOfFreinds.push(item[0]);
      }
    }
  });
}

function getScore(friendOfFreinds, score, visitors) {
  for (let i = 0; i < friendOfFreinds.length; i++) {
    // 이미 score 객체에 존재하는 key라면 그 value에 10을 더한다
    if (score[friendOfFreinds[i]]) {
      score[friendOfFreinds[i]] += 10;
    } else {
      score[friendOfFreinds[i]] = 10;
    }
  }

  visitors.forEach((item) => {
    if (score[item]) {
      score[item] += 1;
    } else {
      score[item] = 1;
    }
  });
}

function sortScore(score, sortedScore) {
  for (let name in score) {
    sortedScore.push([name, score[name]]);
  }

  sortedScore.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }

    // 여기까지 내려오면 점수가 같은 상황인 것
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
  });
}

function getFriendsRecommendArray(alreadyFriends, sortedScore, ans) {
  for (let i = 0; i < sortedScore.length; i++) {
    if (ans.length === 5) {
      break;
    }

    if (sortedScore[i][1] === 0) {
      continue;
    }

    if (alreadyFriends.includes(sortedScore[i][0])) {
      continue;
    }

    ans.push(sortedScore[i][0]);
  }

  return ans;
}

function problem7(user, friends, visitors) {
  if (
    checkUserLength(user) &&
    checkFriendsLength(friends) &&
    checkIdLength(friends) &&
    checkVisitorsLength(visitors) &&
    checkIdOnlyLowerCase(friends)
  ) {
    return;
  }

  let alreadyFriends = [];

  getAlreadyFriends(user, friends, alreadyFriends);

  let friendOfFreinds = [];

  getFriendOfFreinds(user, friends, alreadyFriends, friendOfFreinds);

  let score = {};

  getScore(friendOfFreinds, score, visitors);

  let sortedScore = [];

  sortScore(score, sortedScore);

  let ans = [];

  return getFriendsRecommendArray(alreadyFriends, sortedScore, ans);
}

// module.exports = problem7;
