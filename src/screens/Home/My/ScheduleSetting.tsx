import {useState} from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {RightArrow} from 'src/assets/images';
import DateSelectModal from 'src/components/system/BottomSeetModal/DateSelectModal';
import CustomButton from 'src/components/system/CustomButton';
import {colors} from 'src/constants/colors';
import DateSetting, {DatSetMode} from './DateSetting';
import {format} from 'date-fns';
import ExerciseChips from 'src/components/system/ExerciseChips';
import {DayOrder, dayOrder} from 'src/constants/time';

export default function ScheduleSetting() {
  const [modalVisible, setModalVisible] = useState(false);
  const [dateSetMode, setDateSetMode] = useState<DatSetMode>('basic');
  //
  const formattedDate = format(new Date(), 'yyyy-MM-dd');
  const [selectedDate, setSelectedDate] = useState<string[]>([formattedDate]);
  const [selectedDay, setSelectedDay] = useState<string[] | null>(null); // ['월', '화', '수', '목', '금', '토', '일']
  const [selectedMorningTime, setSelectedMorningTime] = useState<
    string[] | null
  >(null);
  const [selectedAfternoonTime, setSelectedAfternoonTime] = useState<
    string[] | null
  >(null);
  //
  const pressButton = () => {
    setDateSetMode('basic');
    setModalVisible(true);
  };
  const pressText = () => {
    setDateSetMode('calendar');
    setModalVisible(true);
  };
  console.log(
    selectedDate,
    selectedDay,
    selectedMorningTime,
    selectedAfternoonTime,
  );
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.title}>수업 오픈 일정</Text>
          {!selectedDay || !selectedDate ? (
            <EmptySchedule pressButton={pressButton} />
          ) : (
            <ScheduleList
              pressButton={pressButton}
              pressText={pressText}
              morningTimes={selectedMorningTime}
              afternoonTimes={selectedAfternoonTime}
              days={selectedDay}
            />
          )}
        </View>
        <DateSelectModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}>
          <DateSetting
            type={dateSetMode}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
            selectedDate={selectedDate}
            onSelectedDate={setSelectedDate}
            selectedMorningTime={selectedMorningTime}
            onSelectMorningTime={setSelectedMorningTime}
            selectedAfternoonTime={selectedAfternoonTime}
            onSelectAfternoonTime={setSelectedAfternoonTime}
          />
        </DateSelectModal>
      </ScrollView>
    </SafeAreaView>
  );
}

const EmptySchedule = ({pressButton}: {pressButton: () => void}) => {
  return (
    <View style={styles.emptyScheduleContainer}>
      <View style={styles.emptyTextConatiner}>
        <Text style={styles.emptyTitle}>설정된 시간이 없어요</Text>
        <Text style={styles.emptyDescription}>
          아래의 설정하기 버튼으로 일정을 등록해주세요
        </Text>
      </View>
      <CustomButton
        text="일정 등록하기"
        layoutmode="basic"
        variant="fillPrimary"
        onPress={pressButton}
      />
    </View>
  );
};

const ScheduleList = ({
  pressButton,
  pressText,
  morningTimes,
  afternoonTimes,
  days,
}: {
  pressButton: () => void;
  pressText: () => void;
  morningTimes: string[] | null;
  afternoonTimes: string[] | null;
  days: string[] | null;
}) => {
  if (!days || !morningTimes || !afternoonTimes) return null;
  const sortedDayofWeek = (days as DayOrder[]).sort(
    (a, b) => dayOrder[a] - dayOrder[b],
  );
  return (
    <View>
      <View style={styles.list}>
        <View style={{flexDirection: 'row', gap: 4}}>
          {sortedDayofWeek.length > 6 ? (
            <ExerciseChips chipText="매일" mode="empty" />
          ) : (
            sortedDayofWeek.map(day => (
              <ExerciseChips key={day} chipText={day} mode="empty" />
            ))
          )}
        </View>
        <Text>오전</Text>
        <View style={{flexDirection: 'row', gap: 4}}>
          {morningTimes.map(time => (
            <Text key={time}>{time}</Text>
          ))}
        </View>
        <Text>오후</Text>
        <View style={{flexDirection: 'row', gap: 4}}>
          {afternoonTimes.map(time => (
            <Text key={time}>{time}</Text>
          ))}
        </View>
      </View>
      <CustomButton
        text="일정 등록하기"
        layoutmode="basic"
        variant="fillPrimary"
        onPress={pressButton}
      />
      <View style={styles.certainDateSelect}>
        <Text style={styles.certainDateText}>휴무일 설정이 필요하신가요?</Text>
        <Pressable onPress={pressText} style={styles.button}>
          <Text style={[styles.certainDateText, {color: colors.primary}]}>
            설정하기
          </Text>
          <RightArrow style={styles.arrowIcon} fill={colors.primary} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  boxContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#b6c1cd',
  },
  box: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 22,
    flex: 1,
  },
  title: {
    color: colors.gray75,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
    marginBottom: 20,
  },
  emptyScheduleContainer: {
    flex: 1,
    gap: 16,
    alignItems: 'center',
    paddingVertical: 16,
  },
  emptyTextConatiner: {
    gap: 16,
    // paddingVertical: 16,
    alignItems: 'center',
  },
  emptyTitle: {
    color: colors.gray75,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.2,
  },
  emptyDescription: {
    width: '100%',
    color: colors.gray100,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
  },
  list: {
    gap: 12,
    marginBottom: 16,
  },
  certainDateSelect: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  certainDateText: {
    color: colors.gray75,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.2,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    transform: [{rotate: '90deg'}],
  },
});
