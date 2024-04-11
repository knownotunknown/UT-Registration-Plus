import { UserScheduleStore } from '@shared/storage/UserScheduleStore';
import { generateRandomId } from '@shared/util/random';

/**
 * Renames a schedule with the specified name to a new name.
 * @param scheduleId - The id of the schedule to be renamed.
 * @param newName - The new name for the schedule.
 * @returns A promise that resolves to a string if there is an error, or undefined if the schedule is renamed successfully.
 */
export default async function renameSchedule(scheduleId: string, newName: string): Promise<string | undefined> {
    const schedules = await UserScheduleStore.get('schedules');
    const activeSchedule = schedules.find(schedule => schedule.id === scheduleId);
    if (!activeSchedule) {
        throw new Error(`Schedule ${scheduleId} does not exist`);
    }

    activeSchedule.name = newName;
    activeSchedule.updatedAt = Date.now();
    activeSchedule.id = generateRandomId();

    await UserScheduleStore.set('schedules', schedules);
    return undefined;
}
