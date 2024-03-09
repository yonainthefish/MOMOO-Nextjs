const terms = [
  {
    title: '제1조. 목적',
    text: `본 약관은 니즈랩이 제공하는 MOMOO 서비스(이하 '서비스'라 합니다)를 이용함에 있어 당사자의 권리 의무 및 책임사항을 규정하는 것을 목적으로 합니다.`,
  },
  {
    title: '제2조. 정의',
    text: [
      `1. 이용자라 함은, MOMOO에 접속하여 본 약관에 따라 니즈랩이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.`,
      `2. 회원이라 함은, 니즈랩에 개인정보를 제공하고 회원으로 등록한 자로서, 니즈랩의 서비스를 계속하여 이용할 수 있는 자를 말합니다.`,
      `3. 비회원이라 함은, 회원으로 등록하지 않고, 니즈랩이 제공하는 서비스를 이용하는 자를 말합니다.`,
    ],
  },
  {
    title: '제3조. 약관 외 준칙',
    text: `본 약관에서 정하지 아니한 사항은 법령 또는 니즈랩이 정한 서비스의 개별 약관, 운영정책 및 규칙(이하 '세부지침'이라 합니다)의 규정에 따릅니다. 또한 본 약관과 세부지침이 충돌할 경우에는 세부지침이 우선합니다.`,
  },
  {
    title: '제4조. 약관의 명시 및 개정',
    text: [
      `1. 니즈랩은 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면 또는 팝업화면 등 별도의 연결화면에 게시합니다.`,
      `2. 니즈랩은 '전자상거래 등에서의 소비자보호에 관한 법률', '약관의 규제에 관한 법률','전자거래기본법', '정보통신망 이용촉진등에 관한 법률', '소비자보호법' 등 관련법령(이하 '관계법령'이라 합니다)에 위배되지 않는 범위내에서 본 약관을 개정할 수 있습니다.`,
      `3. 니즈랩이 본 약관을 개정하고자 할 경우, 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스 내의 적절한 장소에 그 적용일자 7일전부터 적용일자 전날까지 공지합니다. 다만, 회원에게 불리한 내용으로 약관을 변경하는 경우 최소 30일 이상 유예기간을 두고 공지합니다.`,
      `4. 니즈랩이 본 약관을 개정한 경우, 개정약관은 적용일자 이후 체결되는 계약에만 적용되며 적용일자 이전 체결된 계약에 대해서는 개정 전 약관이 적용됩니다. 다만, 이미 계약을 체결한 회원이 개정약관의 내용을 적용받고자 하는 뜻을 니즈랩에 전달하고 니즈랩이 여기에 동의한 경우 개정약관을 적용합니다.`,
      `5. 본 약관에서 정하지 아니한 사항 및 본 약관의 해석에 관하여는 관계법령 및 건전한 상관례에 따릅니다.`,
    ],
  },
  {
    title: '제5조. 서비스의 중단 등',
    text: [
      `1. 니즈랩이 제공하는 서비스는 연중무휴, 1일 24시간 제공을 원칙으로 합니다. 다만 니즈랩 시스템의 유지 · 보수를 위한 점검, 통신장비의 교체 등 특별한 사유가 있는 경우 서비스의 전부 또는 일부에 대하여 일시적인 제공 중단이 발생할 수 있습니다.`,
      `2. 니즈랩은 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우, 전기통신사업법에 의한 기간통신사업자가 전기통신서비스를 중지하는 등 부득이한 사유가 발생한 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.`,
      `3. 니즈랩이 서비스를 정지하거나 이용을 제한하는 경우 그 사유 및 기간, 복구 예정 일시 등을 지체 없이 이용자에게 알립니다.`,
    ],
  },
  {
    title: '제6조. 회원가입',
    text: [
      `1. 니즈랩이 정한 양식에 따라 이용자가 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.`,
      {
        subTitle: `2. 니즈랩은 전항에 따라 회원가입을 신청한 이용자 중 다음 각호의 사유가 없는 한 회원으로 등록합니다.`,
        text: [
          `- 가입신청자가 본 약관에 따라 회원자격을 상실한 적이 있는 경우. 다만, 니즈랩의 재가입 승낙을 얻은 경우에는 예외로 합니다.`,
          `- 회원정보에 허위, 기재누락, 오기 등 불완전한 부분이 있는 경우`,
          `- 기타 회원으로 등록하는 것이 니즈랩의 운영에 현저한 지장을 초래하는 것으로 인정되는 경우`,
        ],
      },
      `3. 회원가입 시기는 니즈랩의 가입승낙 안내가 회원에게 도달한 시점으로 합니다.`,
    ],
  },
  {
    title: '제7조. 회원탈퇴 및 자격상실 등',
    text: [
      `1. 회원은 니즈랩에 언제든지 탈퇴를 요청할 수 있으며, 니즈랩은 지체없이 회원탈퇴 요청을 처리합니다.`,
      {
        subTitle: `2. MOMOO는 다음 각호의 사유가 발생한 경우 회원의 자격을 제한 또는 정지시킬 수 있습니다.`,
        text: [
          `- 회원가입 시 허위정보를 기재한 경우`,
          `- 다른 이용자의 정상적인 이용을 방해하는 경우`,
          `- 관계법령 또는 본 약관에서 금지하는 행위를 한 경우`,
          `- 공서양속에 어긋나는 행위를 한 경우`,
          `- 기타 회원으로 등록하는 것이 적절하지 않은 것으로 판단되는 경우`,
        ],
      },
      `3. 니즈랩의 서비스를 1년 동안 이용하지 않는 회원의 경우 휴면계정으로 전환하고 서비스 이용을 제한할 수 있습니다.`,
      `4. 휴면계정 전환 시 계정 활성을 위해 필요한 전자우편(e-mail)주소, 비밀번호, 닉네임을 제외한 나머지 정보는 삭제됩니다. 다만, 관계법령에 의해 보존할 필요가 있는 경우 니즈랩은 정해진 기간 동안 회원정보를 보관합니다.`,
    ],
  },
  {
    title: '제8조. 회원에 대한 통지',
    text: [
      `1. 니즈랩은 회원 회원가입 시 기재한 전자우편 등을 이용하여 회원에게 통지 할 수 있습니다.`,
      `2. 니즈랩이 불특정 다수 회원에게 통지하고자 하는 경우 1주일 이상 사이트의 게시판에 게시함으로써 개별 통지에 갈음할 수 있습니다.
        다만 회원이 서비스를 이용함에 있어 중요한 사항에 대하여는 개별 통지합니다.`,
    ],
  },
  {
    title: '제9조. 개인정보보호',
    text: [
      {
        subTitle: `1. 니즈랩은 이용자의 정보수집시 다음의 필수사항 등 서비스 이용에 필요한 최소한의 정보만을 수집합니다.`,
        text: [`- 전자우편(e-mail)주소`, `- 비밀번호`],
      },
      `2. 니즈랩이 개인정보보호법 상의 고유식별정보 및 민감정보를 수집하는 때에는 반드시 대상자의 동의를 받습니다.`,
      {
        subTitle: `3. 니즈랩은 제공된 개인정보를 이용자의 동의 없이 목적외 이용, 또는 제3자 제공할 수 없으며 이에 대한 모든 책임은 니즈랩이 부담합니다. 다만 다음의 경우에는 예외로 합니다.`,
        text: [
          `- 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우`,
          `- 도용방지를 위하여 본인 확인이 필요한 경우`,
          `- 관계법령의 규정에 따른 경우`,
        ],
      },
    ],
  },
  {
    title: '제10조. 니즈랩의 의무',
    text: [
      `1. 니즈랩은 관계법령, 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 약관이 정하는 바에 따라 지속적 · 안정적으로 재화 및 용역을 제공하는데 최선을 다하여야 합니다.`,
      `2. 니즈랩은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.`,
      `3. 니즈랩은 이용자의 수신동의 없이 영리목적으로 광고성 전자우편 등을 발송하지 않습니다.`,
    ],
  },
  {
    title: '제11조. 이용자 및 회원의 의무',
    text: [
      `1. 이용자는 회원가입 신청 시 사실에 근거하여 신청서를 작성해야 합니다. 허위, 또는 타인의 정보를 등록한 경우 니즈랩에 대하여 일체의 권리를 주장할 수 없으며, 니즈랩은 이로 인하여 발생한 손해에 대하여 책임을 부담하지 않습니다.`,
      `2. 이용자는 본 약관에서 규정하는 사항과 기타 니즈랩이 정한 제반 규정 및 공지사항을 준수하여야 합니다. 또한 이용자는 니즈랩의 업무를 방해하는 행위 및 니즈랩의 명예를 훼손하는 행위를 하여서는 안 됩니다.`,
      `3. 이용자는 주소, 연락처, 전자우편 주소 등 회원정보가 변경된 경우 즉시 이를 수정해야 합니다. 변경된 정보를 수정하지 않거나 수정을 게을리하여 발생하는 책임은 이용자가 부담합니다.`,
      {
        subTitle: `4. 이용자는 다음의 행위를 하여서는 안됩니다.`,
        text: [
          `- 니즈랩에 게시된 정보의 변경`,
          `- 니즈랩이 정한 정보 외의 다른 정보의 송신 또는 게시`,
          `- 니즈랩 및 제3자의 저작권 등 지식재산권에 대한 침해`,
          `- 니즈랩 및 제3자의 명예를 훼손하거나 업무를 방해하는 행위`,
          `- 외설 또는 폭력적인 메시지, 화상, 음성 기타 관계법령 및 공서양속에 반하는 정보를 니즈랩의 사이트에 공개 또는 게시하는 행위`,
        ],
      },
      `5. 회원은 전자우편(e-mail)주소와 비밀번호를 직접 관리해야 합니다.`,
      `6. 회원이 자신의 전자우편(e-mail)주소 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 니즈랩에 통보하고 안내에 따라야 합니다.`,
    ],
  },
  {
    title: '제12조. 저작권의 귀속 및 이용',
    text: [
      `1. 서비스가 제공하는 서비스 및 이와 관련된 모든 지식재산권은 니즈랩에 귀속됩니다`,
      `2. 이용자는 서비스에게 지식재산권이 있는 정보를 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나, 제3자가 이용하게 하여서는 안됩니다.`,
      `3. 이용자가 서비스 내에 게시한 게시물, 이용후기 등 콘텐츠(이하 '콘텐츠')의 저작권은 해당 콘텐츠의 저작자에게 귀속됩니다.`,
    ],
  },
  {
    title: '제13조. 분쟁의 해결',
    text: [
      `1. 니즈랩은 이용자가 제기하는 불만사항 및 의견을 지체없이 처리하기 위하여 노력합니다. 다만 신속한 처리가 곤란한 경우 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.`,
      `2. 니즈랩와 이용자간 발생한 분쟁에 관한 소송은 민사소송법에 따른 관할법원에 제기하며, 준거법은 대한민국의 법령을 적용합니다.`,
    ],
  },
];

export default terms;
