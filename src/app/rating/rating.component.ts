import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RatingComponent),
            multi: true
        }
    ]
})
export class RatingComponent implements ControlValueAccessor {
    stars = [
        {
            value: 1,
            text: 'Nope! Bye!'
        },
        {
            value: 2,
            text: 'Bad'
        },
        {
            value: 3,
            text: 'I can live with it'
        },
        {
            value: 4,
            text: 'Good'
        },
        {
            value: 5,
            text: 'Awesome!'
        }
    ];

    selectedRating = 0;

    ratingText = '';

    isDisabled = false;

    onChange?: (input: number) => void;

    onTouched?: () => void;

    updateRatingText(text: string): void {
        this.ratingText = text;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    writeValue(formControlValue: number): void {
        this.selectedRating = formControlValue;
    }

    setRating(value: number): void {
        if (this.isDisabled) {
            return;
        }

        this.selectedRating = value;
        this.onChange?.(value);
        this.onTouched?.();
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}
