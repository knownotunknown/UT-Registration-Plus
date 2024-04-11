import { UserScheduleStore } from '@shared/storage/UserScheduleStore';
import { generateRandomId } from '@shared/util/random';

/**
 * Clears the courses for a given schedule.
 * @param scheduleId - The id of the schedule.
 * @throws Error if the schedule does not exist.
 */
export default async function clearCourses(scheduleId: string): Promise<void> {
    const schedules = await UserScheduleStore.get('schedules');
    const activeSchedule = schedules.find(schedule => schedule.id === scheduleId);
    if (!activeSchedule) {
        throw new Error(`Schedule ${scheduleId} does not exist`);
    }
    activeSchedule.courses = [];
    activeSchedule.updatedAt = Date.now();
    activeSchedule.id = generateRandomId();

    await UserScheduleStore.set('schedules', schedules);
}
