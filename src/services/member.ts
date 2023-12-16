import {
  CommonResponse,
  Home,
  Onboarding,
  PersonalExercise,
  PersonalExerciseRequestBody,
  PersonalExerciseList,
  UserBody,
  MemberExerciseReflectionCreateBody,
  MemberExerciseReflectionEditBody,
} from 'src/types/type';
import Config from 'react-native-config';

// 회원 등록 및 로그인
export async function registerOrLoginMember(member: UserBody) {
  const url = Config.MCP_SERVER_URL;
  if (!url) throw new Error('서버 주소가 설정되지 않았습니다.');
  const response = await fetch(`${url}/api/member/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(member),
  });
  if (!response.ok) {
    throw new Error('회원 등록 및 로그인에 실패했습니다.');
  }
  return response.json();
}

// 회원 온보딩 정보 등록
export async function registerOnboardingInfo(
  memberId: number,
  onboarding: Onboarding,
) {
  const url = Config.MCP_SERVER_URL;
  if (!url) throw new Error('서버 주소가 설정되지 않았습니다.');
  const response = await fetch(
    `${url}/api/member/auth/add-onboarding/${memberId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(onboarding),
    },
  );
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('로그인이 필요합니다.');
    } else if (response.status === 404) {
      throw new Error('존재하지 않는 회원입니다.');
    }
    throw new Error('온보딩 정보 등록에 실패했습니다.');
  }
  return response.json();
}

// 회원 탈퇴
export async function deleteMember(memberId: number) {
  const url = Config.MCP_SERVER_URL;
  if (!url) throw new Error('서버 주소가 설정되지 않았습니다.');
  const response = await fetch(`${url}/api/member/auth/delete/${memberId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('로그인이 필요합니다.');
    } else if (response.status === 404) {
      throw new Error('존재하지 않는 회원입니다.');
    }
    throw new Error('회원 탈퇴에 실패했습니다.');
  }
  return response.json();
}

// 회원 홈 정보 조회
export async function getMemberHomeInfo(memberId: number) {
  const url = Config.MCP_SERVER_URL;
  if (!url) throw new Error('서버 주소가 설정되지 않았습니다.');
  const response = await fetch(`${url}/api/member/home/${memberId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('로그인이 필요합니다.');
    } else if (response.status === 404) {
      throw new Error('존재하지 않는 회원입니다.');
    }
    throw new Error('멤버 홈 정보 조회에 실패했습니다.');
  }
  if (response.status === 204) {
    return null;
  }
  const data = (await response.json()) as CommonResponse<Home>;
  return data;
}

// 회원 개인 운동 세부 조회
export async function getMemberExercise(personalExerciseId: number) {
  const url = Config.MCP_SERVER_URL;
  if (!url) throw new Error('서버 주소가 설정되지 않았습니다.');
  const response = await fetch(
    `${url}/api/member/exercise/own/${personalExerciseId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  if (!response.ok) {
    throw new Error('개인 운동 조회에 실패했습니다.');
  }
  const data = (await response.json()) as CommonResponse<PersonalExercise>;
  return data;
}

// 회원 개인 운동 목록 조회
export async function getMemberExerciseList(memberId: number) {
  const url = Config.MCP_SERVER_URL;
  if (!url) throw new Error('서버 주소가 설정되지 않았습니다.');
  const response = await fetch(`${url}/api/member/exercise/${memberId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('개인 운동 목록 조회에 실패했습니다.');
  }
  const data = (await response.json()) as CommonResponse<PersonalExerciseList>;
  return data;
}

// 회원 개인 운동 생성
export async function createMemberExercise(
  memberId: number,
  personalExercise: PersonalExerciseRequestBody,
) {
  const url = Config.MCP_SERVER_URL;
  if (!url) throw new Error('서버 주소가 설정되지 않았습니다.');
  const response = await fetch(`${url}/api/member/exercise/${memberId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(personalExercise),
  });
  if (!response.ok) {
    throw new Error('개인 운동 생성에 실패했습니다.');
  }
  return response.json();
}
// 회원 개인 운동 수정
export async function updateMemberExercise(
  memberId: number,
  personalExercise: PersonalExerciseRequestBody,
) {
  const url = Config.MCP_SERVER_URL;
  if (!url) throw new Error('서버 주소가 설정되지 않았습니다.');
  const response = await fetch(`${url}/api/member/exercise/${memberId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(personalExercise),
  });
  if (!response.ok) {
    throw new Error('개인 운동 수정에 실패했습니다.');
  }
  return response.json();
}

// 회원 개인 운동 회고 생성
export async function createMemberExerciseReflection({
  personalId,
  memberId,
  log,
}: MemberExerciseReflectionCreateBody) {
  const url = Config.MCP_SERVER_URL;
  if (!url) throw new Error('서버 주소가 설정되지 않았습니다.');

  const response = await fetch(`${url}/api/member/log`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({personalId, memberId, log}),
  });
  if (!response.ok) {
    throw new Error('개인 운동 회고 생성에 실패했습니다.');
  }
  return response.json();
}

// 회원 개인 운동 회고 업데이트
export async function updateMemberExerciseReflection({
  personalId,
  exerciseDiaryId,
  log,
}: MemberExerciseReflectionEditBody) {
  const url = Config.MCP_SERVER_URL;
  if (!url) throw new Error('서버 주소가 설정되지 않았습니다.');

  const response = await fetch(`${url}/api/member/log`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({personalId, exerciseDiaryId, log}),
  });
  if (!response.ok) {
    throw new Error('개인 운동 회고 업데이트에 실패했습니다.');
  }
  return response.json();
}
