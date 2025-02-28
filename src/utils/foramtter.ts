export const showYearFormatter = (year: string): string => {
  if (year === "all") {
    return "전체";
  }
  return year;
};

export const showStatusFormatter = (status: string): string => {
  if (status === "all") {
    return "전체";
  } else if (status === "proceeding") {
    return "진행중";
  }
  return "종료";
};

export const showPlanFormatter = (plan: string): string => {
  if (plan === "all") {
    return "전체";
  } else if (plan === "individual") {
    return "최혜지 개인프로젝트";
  } else {
    return "아르플래닛 주최/주관 공연";
  }
};

export const showSortFormatter = (sort: string): string => {
  if (sort === "ASC") {
    return "오래된순";
  }
  return "최신순";
};
