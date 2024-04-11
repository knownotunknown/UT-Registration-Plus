import { UserScheduleStore } from '@shared/storage/UserScheduleStore';
import { generateRandomId } from '@shared/util/random';

/**
 * Switches the active schedule to the specified schedule name.
 * Throws an error if the schedule does not exist.
 * @param scheduleId - The id of the schedule to switch to.
 * @returns A Promise that resolves when the active schedule is successfully switched.
 */
export default async function switchSchedule(scheduleId: string): Promise<void> {
    const schedules = await UserScheduleStore.get('schedules');
    const activeIndex = schedules.findIndex(schedule => schedule.id === scheduleId)
    const activeSchedule = schedules.find(schedule => schedule.id === scheduleId);
    if (!activeSchedule) {
        throw new Error(`Schedule ${scheduleId} does not exist`);
    }

    activeSchedule.updatedAt = Date.now();
    activeSchedule.id = generateRandomId();

    await UserScheduleStore.set('activeIndex', activeIndex);
}
